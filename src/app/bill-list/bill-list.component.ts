import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BillModel } from '../../models/billmodel'

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  @Input() billList: BillModel
  @Output() selectedBill: EventEmitter<BillModel> = new EventEmitter<BillModel>()
  constructor() { }
  sendBill(bill) {
    this.selectedBill.emit(bill)
  }
  ngOnInit() {
  }

}
