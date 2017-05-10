import { Component } from '@angular/core';
import { BillModel, Food } from '../models/billmodel'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bills: BillModel[]
  bill: BillModel
  constructor() {
    this.bills = [
      new BillModel(1, 10, 453,
        [
          new Food(1, 'FoodA'),
          new Food(2, 'FoodB'),
          new Food(3, 'FoodC'),
          new Food(4, 'FoodD')
        ]
      ),
      new BillModel(2, 6, 512,
        [
          new Food(5, 'FoodE'),
          new Food(6, 'FoodF'),
          new Food(7, 'FoodG'),
          new Food(8, 'FoodH')
        ]
      ),
      new BillModel(3, 5, 784,
        [
          new Food(9, 'FoodI'),
          new Food(10, 'FoodJ'),
          new Food(11, 'FoodK'),
          new Food(12, 'FoodL')
        ]
      ),
      new BillModel(4, 4, 654,
        [
          new Food(13, 'FoodM'),
          new Food(14, 'FoodN'),
          new Food(15, 'FoodO'),
          new Food(16, 'FoodP')
        ]
      ),
      new BillModel(5, 7, 851,
        [
          new Food(17, 'FoodQ'),
          new Food(18, 'FoodR'),
          new Food(19, 'FoodS'),
          new Food(20, 'FoodT')
        ]
      ),
      new BillModel(6, 11, 314,
        [
          new Food(21, 'FoodU'),
          new Food(22, 'FoodV'),
          new Food(23, 'FoodW'),
          new Food(24, 'FoodX')
        ]
      ),
    ]
  }
  selectedBill(bill: BillModel) {
    this.bill = bill
  }
}
