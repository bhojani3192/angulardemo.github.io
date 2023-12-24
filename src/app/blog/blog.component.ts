import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  date : Date = new Date();
  admin:string="John Smith"

  constructor() { }

  ngOnInit(): void {
  }

}
