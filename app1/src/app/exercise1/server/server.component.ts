import { Component } from '@angular/core';

@Component({
  selector: 'server-me',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.sass']
})
export class ServerComponent {
  private title = 'server1';
 
  getTitle():string {
    return 'server6';
  }

  allowNewServer = false;

  constructor() {
   setTimeout(() => {
    this.allowNewServer = true;
   }, 10000); 
  }

  doClick() {
    alert(0)
  }
  myName = '';
  doInput(event:Event) {
    this.myName = (<HTMLInputElement>event.target).value

  }

  getColor():string {
    return this.allowNewServer ?  'green' : 'red'; 
  }

  mapones = ['map1', 'map2'];
}
