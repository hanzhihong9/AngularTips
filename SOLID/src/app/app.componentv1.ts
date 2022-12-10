import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <mat-toolbar color="primary">
      <span>My App</span>
    </mat-toolbar>
    <main class="content">
      <app-widget></app-widget>
    <!-- we can also put everthing in app widget into this file , but it break the rule 1  -->
    </main>
  `,
  styles: [
    `
      .content {
        background-color: #fff;
        padding: 2rem;
        height: calc(100vh - 64px);
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class AppComponent {}
