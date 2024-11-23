import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExpenseSummary() {
   return (
      <Card>
         <CardHeader>
            <CardTitle>Expense Summary</CardTitle>
         </CardHeader>
         <CardContent>
            <p className="mb-4 text-2xl font-bold">Total Expenses: $X</p>
            <p className="mb-2 text-xl font-semibold">Expenses by Category:</p>
            <ul>
               <li className="flex items-center justify-between gap-4">
                  <span>Pizza</span>
                  <span>$12</span>
               </li>
            </ul>
         </CardContent>
      </Card>
   );
}
