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

export default function ExpenseTable() {
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
                  <TableRow>
                     <TableCell>Pizza order</TableCell>
                     <TableCell>$12.00</TableCell>
                     <TableCell>Food</TableCell>
                     <TableCell className="text-nowrap">2024-11-12</TableCell>
                     <TableCell>
                        <Button variant="destructive">Delete</Button>
                     </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </CardContent>
      </Card>
   );
}
