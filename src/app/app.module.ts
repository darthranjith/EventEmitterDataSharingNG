import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BillListComponent,
    BillDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
