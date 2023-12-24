import { Component, OnInit, Optional } from '@angular/core';
import { InjectionService } from './injection.service';
import { EagerService } from './eager.service';
import { LazyvalueService } from './lazyvalue.service';
import { RandomService } from './chiildone/random.service';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.scss'],
  providers: [LazyvalueService],
  viewProviders:[]
})

export class InjectionComponent implements OnInit {

  injectValue:any;
  eagerValue:any;
  lazyValue:any
  randomApp = 'App: Not defined';
  randomEager = 'Eager: Not defined'
  randomLazy = 'lazy: Not defined'
  randomNo:any;


  constructor(
    @Optional() private injectService : InjectionService,
    @Optional() private  eagerService: EagerService,
    @Optional() private  lazyService: LazyvalueService ,
                private randomService: RandomService 
  ) {
    this.injectValue = injectService?.getSharedValue();
    this.eagerValue = eagerService?.getSharedValue();
    this.lazyValue = lazyService?.getSharedValue()
    
    if(injectService) this.randomApp = this.injectService.RandomNo;
    if (eagerService) this.randomEager = this.eagerService.RandomNo;
    if (lazyService) this.randomLazy = this.lazyService.RandomNo;

    this.randomNo = randomService.RandomNo
   
   }

  ngOnInit(): void {
  }

}
