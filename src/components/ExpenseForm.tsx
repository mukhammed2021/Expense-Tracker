import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function ExpenseForm() {
   return (
      <form action="#">
         <Card>
            <CardHeader>
               <CardTitle>Add Expense</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div>
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" type="text" required />
               </div>
               <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input id="amount" type="number" required />
               </div>
               <div>
                  <Label>Category</Label>
                  <Select>
                     <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectGroup>
                           <SelectItem value="food">Food</SelectItem>
                           <SelectItem value="transportation">
                              Transportation
                           </SelectItem>
                           <SelectItem value="entertainment">
                              Entertainment
                           </SelectItem>
                           <SelectItem value="utilities">Utilities</SelectItem>
                           <SelectItem value="other">Other</SelectItem>
                        </SelectGroup>
                     </SelectContent>
                  </Select>
               </div>
               <div>
                  <Label htmlFor="dateTime">Date</Label>
                  <Input id="dateTime" type="date" required />
               </div>
            </CardContent>
            <CardFooter>
               <Button type="submit">Add Expense</Button>
            </CardFooter>
         </Card>
      </form>
   );
}
