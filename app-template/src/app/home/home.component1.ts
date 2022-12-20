import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableComponentModule1 } from '../shared/ui/table.component1';

@Component({
  selector: 'app-home-one',
  template: `
    <!-- IMPORTANT: This is a bad example to demonstrate why *ngTemplateOutlet is a better option -->
    <!-- No templates provided, will use default layout -->
    <app-table1 [data]="employees"></app-table1>
    <!-- Basic configured template -->
    <app-table1 [data]="employees" [headers]="['First', 'Last']"></app-table1>
    <!-- Highly configured template with conditional elements -->
    <app-table1
      [data]="inventory"
      [headers]="['Item', 'Price', '']"
      [hideRows]="['plu', 'supplier', 'inStock', 'currency']"
      [actionButtonFn]="actionButtonFn"
      (actionClicked)="purchaseItem($event)"
    ></app-table1>
  `,
  providers: [CurrencyPipe],
})
export class HomeComponent1 {
  employees = [
    { firstName: 'Employee', lastName: 'One' },
    { firstName: 'Employee', lastName: 'Two' },
    { firstName: 'Employee', lastName: 'Three' },
    { firstName: 'Employee', lastName: 'Four' },
    { firstName: 'Employee', lastName: 'Five' },
  ];

  inventory = [
    {
      plu: 110,
      supplier: 'X Corp',
      name: 'Table extender',
      inStock: 500,
      price: 50,
      currency: 'GBP',
    },
    {
      plu: 120,
      supplier: 'X Corp',
      name: 'Heated toilet seat',
      inStock: 0,
      price: 80,
      currency: 'GBP',
    },
    {
      plu: 155,
      supplier: 'Y Corp',
      name: 'Really good pencil',
      inStock: 1,
      price: 8000,
      currency: 'AUD',
    },
  ].map((item) => ({
    ...item,
    price: this.currencyPipe.transform(item.price, item.currency),
  }));

  actionButtonFn = (row: any) => (row.inStock > 0 ? 'Buy now' : null);

  constructor(private currencyPipe: CurrencyPipe) {}

  purchaseItem(item: any) {
    console.log('handle purchase for', item.plu);
  }
}

@NgModule({
  declarations: [HomeComponent1],
  imports: [
    CommonModule,
    TableComponentModule1,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent1,
      },
    ]),
  ],
})
export class HomeModule1 {}