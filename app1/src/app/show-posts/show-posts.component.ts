import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  standalone: true,
  selector: 'app-show-posts',
  template: `
    <p>
      show-posts works!
    </p>
  `,
  styles: [
  ]
})
export class ShowPostsComponent implements OnInit {

  constructor(
    private service:AppService
  ) {
   
   }

  ngOnInit(): void {
    this.service.getAllPosts().subscribe(
      data => console.log(1 , data)
    )

    this.service.getError().subscribe(
      value => console.log(2 , value)
    )
  }

}
