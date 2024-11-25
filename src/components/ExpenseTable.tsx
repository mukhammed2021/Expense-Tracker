import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type Expense } from "./ExpenseTracker";

interface ExpenseTableProps {
   expenses: Expense[];
}

function formatCurrency(value: number) {
   return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
   }).format(value);
}

export default function ExpenseTable({ expenses }: ExpenseTableProps) {
   return (
      <Card>
         <CardHeader>
            <CardTitle>Expense List</CardTitle>
         </CardHeader>
         <CardContent>
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead>Description</TableHead>
                     <TableHead>Amount</TableHead>
                     <TableHead>Category</TableHead>
                     <TableHead>Date</TableHead>
                     <TableHead>Action</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {expenses.map((expense: Expense) => (
                     <TableRow key={expense.id}>
                        <TableCell>{expense.description}</TableCell>
                        <TableCell>{formatCurrency(expense.amount)}</TableCell>
                        <TableCell>{expense.category}</TableCell>
                        <TableCell className="text-nowrap">
                           {expense.date}
                        </TableCell>
                        <TableCell>
                           <Button variant="destructive">Delete</Button>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </CardContent>
      </Card>
   );
}
