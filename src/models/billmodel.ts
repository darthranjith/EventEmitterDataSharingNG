export class BillModel {
    No: number
    TableNo: number
    Amount: number
    Foods: Food[]
    constructor(No: number, TableNo: number, Amount: number, Foods: Food[]) {
        this.No = No
        this.TableNo = TableNo
        this.Amount = Amount
        this.Foods = Foods
    }
}
export class Food {
    Id: number
    Name: string
    constructor(Id: number, Name: string) {
        this.Id = Id
        this.Name = Name
    }
}