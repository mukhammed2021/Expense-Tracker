import { useReducer } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseTable from "./ExpenseTable";

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

export default function ExpenseTracker() {
   const [{ expense, expenses }, dispatch] = useReducer(reducer, initialState);

   return (
      <div className="container">
         <div className="mb-8 grid gap-8 md:grid-cols-2">
            <ExpenseForm expense={expense} dispatch={dispatch} />
            <ExpenseSummary expenses={expenses} />
         </div>
         <ExpenseTable expenses={expenses} />
      </div>
   );
}
