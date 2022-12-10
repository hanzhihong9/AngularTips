import { Directive, Input } from '@angular/core';

@Directive() /// only used for being able to use @Input()
export class WidgetBase {
  @Input()
  title: string = '';
  onExportJson(): void {
    console.log('Export Json logic..');
  }
}