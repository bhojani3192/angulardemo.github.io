import { Component, OnInit, Optional, SkipSelf,Host,Self } from '@angular/core';
import { RandomService } from '../random.service';


@Component({
  selector: 'app-injectiongrandchild',
  templateUrl: './injectiongrandchild.component.html',
  styleUrls: ['./injectiongrandchild.component.scss'],
  providers: [RandomService] 
})
export class InjectiongrandchildComponent implements OnInit {

  randomNo:any;

 
  // constructor(@SkipSelf() private randomService: RandomService){
  //   this.randomNo = randomService.RandomNo
  // }

  constructor(@Optional() private randomService: RandomService){
    this.randomNo = randomService.RandomNo
  }


  // constructor(@Host() private randomService: RandomService){
  //   this.randomNo = randomService.RandomNo
  // }


  ngOnInit(): void {
  }

}
