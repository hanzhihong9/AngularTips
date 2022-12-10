import { Component } from '@angular/core';

import { WidgetBase } from './widget-base';

@Component({
  selector: 'app-widget',
  template: `
    <div class="header">
      <h1>{{title}}</h1>
      <button mat-stroked-button (click)="onExportJson()">
        Export as JSON
      </button>
    </div>
    <mat-divider></mat-divider>
    <ng-content></ng-content> 
    <!-- ng-content is the way to extend the child -- >
    <!-- for open and close desinpline -->
  `,
  styles: [
    `
      :host {
        display: block;
        border: #f0ebeb solid 1px;
        border-radius: 5px;
        padding: 15px;
        background-color: #fafafa;
        width: 400px;
        margin-left: 20px;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `,
  ],
})
export class WidgetComponent extends WidgetBase {
  onExportJson(): void {
    super.onExportJson();
    console.log('... aditional logic ...');
    // ... but it should not break a contract with Base class
  }
 
}