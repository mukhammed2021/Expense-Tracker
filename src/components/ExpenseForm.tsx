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
import { useExpenses } from "@/context/ExpensesContext";

export default function ExpenseForm() {
   const { expense, dispatch } = useExpenses();

   const { description, amount, category, date } = expense;

   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if (description.trim() && amount && category && date) {
         dispatch({
            type: "expense/add",
            payload: {
               id: self.crypto.randomUUID(),
               description,
               amount,
               category,
               date,
            },
         });
      }
   }

   return (
      <form action="#" onSubmit={handleSubmit}>
         <Card>
            <CardHeader>
               <CardTitle>Add Expense</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div>
                  <Label htmlFor="description">Description</Label>
                  <Input
                     id="description"
                     type="text"
                     required
                     value={description}
                     onChange={(e) =>
                        dispatch({
                           type: "expense/description",
                           payload: e.target.value,
                        })
                     }
                  />
               </div>
               <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                     id="amount"
                     type="number"
                     required
                     min={1}
                     value={amount}
                     onChange={(e) =>
                        dispatch({
                           type: "expense/amount",
                           payload: +e.target.value,
                        })
                     }
                  />
               </div>
               <div>
                  <Label>Category</Label>
                  <Select
                     value={category}
                     onValueChange={(value) =>
                        dispatch({ type: "expense/category", payload: value })
                     }
                  >
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
                  <Input
                     id="dateTime"
                     type="date"
                     required
                     value={date}
                     onChange={(e) =>
                        dispatch({
                           type: "expense/date",
                           payload: e.target.value,
                        })
                     }
                  />
               </div>
            </CardContent>
            <CardFooter>
               <Button type="submit">Add Expense</Button>
            </CardFooter>
         </Card>
      </form>
   );
}
