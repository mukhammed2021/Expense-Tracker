import ExpenseForm from "./ExpenseForm";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseTable from "./ExpenseTable";

export default function ExpenseTracker() {
   return (
      <div className="container">
         <div className="mb-8 grid gap-8 md:grid-cols-2">
            <ExpenseForm />
            <ExpenseSummary />
         </div>
         <ExpenseTable />
      </div>
   );
}
