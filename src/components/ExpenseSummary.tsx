import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Expense } from "./ExpenseTracker";

interface ExpenseSummaryProps {
   expenses: Expense[];
}

interface CategorySummary {
   id: string;
   category: string;
   sum: number;
}

function formatCurrency(value: number) {
   return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
   }).format(value);
}

export default function ExpenseSummary({ expenses }: ExpenseSummaryProps) {
   const expenseSummary = expenses.reduce((acc, { amount }) => {
      return acc + Number(amount);
   }, 0);

   const categorySummary = expenses.reduce(
      (acc: CategorySummary[], expense) => {
         const existingCategory = acc.find(
            (el) => el.category === expense.category,
         );

         if (!existingCategory) {
            return [
               ...acc,
               {
                  id: expense.id,
                  category: expense.category,
                  sum: expense.amount,
               },
            ];
         } else {
            existingCategory.sum += expense.amount;
            return acc;
         }
      },
      [],
   );

   return (
      <Card>
         <CardHeader>
            <CardTitle>Expense Summary</CardTitle>
         </CardHeader>
         <CardContent>
            <p className="mb-4 text-2xl font-bold">
               Total Expenses: {expenseSummary}
            </p>
            <p className="mb-2 text-xl font-semibold">Expenses by Category:</p>
            <ul>
               {categorySummary.map((el) => (
                  <li
                     key={el.id}
                     className="flex items-center justify-between gap-4"
                  >
                     <span className="capitalize">{el.category}</span>
                     <span>{formatCurrency(el.sum)}</span>
                  </li>
               ))}
            </ul>
         </CardContent>
      </Card>
   );
}
