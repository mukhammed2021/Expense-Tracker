import { createContext, useContext, useReducer } from "react";

interface ExpensesProviderProps {
   children: React.ReactNode;
}

interface ExpensesContextType {
   expense: Expense;
   expenses: Expense[];
   dispatch: React.Dispatch<ACTIONTYPE>;
}

export interface Expense {
   id: string;
   description: string;
   amount: number;
   category: string;
   date: string;
}

const initialState = {
   expense: {
      id: "",
      description: "",
      amount: 1,
      category: "",
      date: "",
   },
   expenses: [] as Expense[],
};

export type ACTIONTYPE =
   | { type: "expense/description"; payload: string }
   | { type: "expense/amount"; payload: number }
   | { type: "expense/category"; payload: string }
   | { type: "expense/date"; payload: string }
   | { type: "expense/add"; payload: Expense };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
   switch (action.type) {
      case "expense/description":
         return {
            ...state,
            expense: { ...state.expense, description: action.payload },
         };
      case "expense/amount":
         return {
            ...state,
            expense: { ...state.expense, amount: action.payload },
         };
      case "expense/category":
         return {
            ...state,
            expense: { ...state.expense, category: action.payload },
         };
      case "expense/date":
         return {
            ...state,
            expense: { ...state.expense, date: action.payload },
         };
      case "expense/add":
         return {
            ...state,
            expenses: [...state.expenses, action.payload],
            expense: {
               id: "",
               description: "",
               amount: 1,
               category: "",
               date: "",
            },
         };

      default:
         throw Error("Unknown action type");
   }
}

const ExpensesContext = createContext<ExpensesContextType | null>(null);

function ExpensesProvider({ children }: ExpensesProviderProps) {
   const [{ expense, expenses }, dispatch] = useReducer(reducer, initialState);

   return (
      <ExpensesContext.Provider
         value={{
            expense,
            expenses,
            dispatch,
         }}
      >
         {children}
      </ExpensesContext.Provider>
   );
}

function useExpenses() {
   const expensesContext = useContext(ExpensesContext);

   if (!expensesContext)
      throw new Error(
         "useExpenses has to be used within <ExpensesContext.Provider>",
      );

   return expensesContext;
}

export { ExpensesProvider, useExpenses };
