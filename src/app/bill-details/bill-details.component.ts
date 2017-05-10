import { Component, OnInit,Input } from '@angular/core';
import { BillModel } from '../../models/billmodel'
@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {
  @Input() bill: BillModel
  constructor() { }
  ngOnInit() {
  }
}
