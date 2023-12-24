import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childview',
  templateUrl: './childview.component.html',
  styleUrls: ['./childview.component.scss'],
  providers:[{provide:'Token', useValue:'value'}]
})
export class ChildviewComponent implements OnInit {



  count = 0;

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
