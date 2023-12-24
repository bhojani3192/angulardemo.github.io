import { Component, OnInit } from '@angular/core';
import { RandomService } from './random.service';

@Component({
  selector: 'app-chiildone',
  templateUrl: './chiildone.component.html',
  styleUrls: ['./chiildone.component.scss'],
  // providers:[RandomService],
  viewProviders:[RandomService]
})
export class ChiildoneComponent implements OnInit {

  randomNo='';
  constructor(private randomService: RandomService) {
    this.randomNo = randomService.RandomNo
   }

  ngOnInit(): void {
  }

}
