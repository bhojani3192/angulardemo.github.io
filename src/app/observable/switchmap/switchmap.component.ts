import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {switchMap,of,map,filter,from,fromEvent,interval,Observable,catchError} from 'rxjs'

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  @ViewChild('button',{static:true}) button?:ElementRef
  click$ = new  Observable
  constructor() { }


  ngAfterViewInit(){
    this.click$ = fromEvent(this.button?.nativeElement, 'click');
    this.switchExample()
  }

  switchExample(){
    this.click$
    .pipe(
      switchMap(()=>{
        return interval(500)
      })
      ).subscribe(
        val => console.log(val)
      )
  }



  ngOnInit(): void {
    let srcObservable = of(1,2,3)
    let innerObservable = of('A','B','C','D')
  
    srcObservable.pipe(
      switchMap( val =>{
        console.log('source Value ' + val);
        console.log('starting new observable');
        return innerObservable
      })
    )
    .subscribe(ret =>{
      console.log('recd ' + ret);
    })

    let obs = of(1,2)

    obs.pipe(
      map(val =>{
          return   val*2
        }))
        .subscribe(ret =>{
          console.log('recd from map ' + ret);
        })

      obs.pipe(
        switchMap(
          val=>{
            return of (val*2)
          }
        )
      ).subscribe(rect=> {console.log("recd from switchMap " + rect);
      })

    











  }

}
