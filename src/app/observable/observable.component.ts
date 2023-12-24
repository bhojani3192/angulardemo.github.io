import { Component, OnInit,ViewChild,ElementRef,Renderer2} from '@angular/core';
import { Observable, fromEvent,of,from,debounceTime,pipe,interval,timer,Subscription } from 'rxjs';
import { map,filter,tap,debounce } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { KeyValuePipe } from '@angular/common';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
  providers:[KeyValuePipe]
})
export class ObservableComponent implements OnInit {

  @ViewChild('btn' , {static: true}) button?:ElementRef;
  @ViewChild('name', {static:true}) name?:ElementRef;
  @ViewChild('httpbtn',{static:true}) httpBtn?:ElementRef;
  
  buttonSubscription:any
  data:any = []
  
 

  buttonClick(){
    this.buttonSubscription = fromEvent(this.button?.nativeElement,'click')
    .pipe(debounceTime(300))
    .subscribe(res=> console.log(res));
  }

  scroll(){
    const source = fromEvent(window, 'scroll');
    source.subscribe(val => console.log(val))
  }

  constructor(private elm:ElementRef, private renderer:Renderer2, private http: HttpClient, private keyValue:KeyValuePipe){

  }


  // obs = new Observable( (observer) => {
  //   console.log('Observable starts');
  //   observer.next('1');
  //   observer.next('2');
  //   observer.next('3');
  //   observer.next('4');
  //   observer.next('5');
  // });
   
  // obs = new Observable (observer => {
  //   console.log("observable start");
  //   setTimeout(() => {observer.next("1")}, 1000);
  //   setTimeout(() => {observer.next("2")}, 2000);
  //   setTimeout(() => {observer.next("3")}, 3000);
  //   setTimeout(()=>  {observer.error("error emitted")}, 3500)
  //   setTimeout(() => {observer.next("4")}, 4000);
  //   setTimeout(() => {observer.next("5")}, 5000);
  // })
  
  obs = new Observable (observer => {
     console.log("observable start");
    setTimeout(() => {observer.next("1")}, 1000);
    setTimeout(() => {observer.next("2")}, 2000);
    setTimeout(() => {observer.next("3")}, 3000);
    setTimeout(()=>  {observer.complete()}, 3500)
    setTimeout(() => {observer.next("4")}, 4000);
    setTimeout(() => {observer.next("5")}, 5000);
  })

customOperator = pipe(
  tap(data => console.log('tap ' + data)),
  filter(data =>  this.data > 2),
  tap(data => console.log('filter ' + data)),
  map((val)=>{
    return val as number * 2
  }),
  tap(data=> console.log('final ' + data)
  )
)

  
// operator
obsopr = new Observable((observer2) => {
  observer2.next(1)
  observer2.next(2)
  // observer2.next(3)
  // observer2.next(4)
  // observer2.next(5)
  observer2.complete()
}).pipe(
  this.customOperator,
  tap(data => console.log('final ' + data))
)

// map
srcArray = from([1,2,3,4])

multiplyby2(){
  this.srcArray
  .pipe(map ((val,i)=>{
    // console.log(i);
    return val*2
  }))
  .subscribe(val=>{
    console.log(val);
  })
}

filterWithMap(){
  this.srcArray.pipe(
    filter(val=>{
      return val>2;
    }),
    map((val,i)=>{
      return val*2;
    }))
    .subscribe(val => {console.log(val)
    })
}

MultipleMap(){
  this.srcArray
  .pipe(
    map(val =>{
      return val + 10;
    }),
    map((val,i)=>{
      return val*2;
    }))
    .subscribe(val => {console.log(val)
    })
}





srcName$ = from(['Johan','steven','smith'])
toUppercase(){
  this.srcName$
  .pipe(map(data=>{
    return data.toUpperCase()
  }))
  .subscribe(data=> console.log(data)
  )
}

srcObject = from([
  {fName:'Sachin' , lName:'Tendulkar'},
  {fName:'Virat' , lName:'Kohli'},
  {fName:'Rohit' , lName:'Sharma'},
])

MapToSingleProperty(){
  this.srcObject
  .pipe(map(data => {
    return  data.fName + '' +  data.lName
  }) )
  .subscribe(data=> {console.log(data);
  })
}

$dogsBread(): Observable <any>{
  return this.http.get<any>("https://dog.ceo/api/breeds/list/all")
}

getDogsBread(){
  this.$dogsBread().pipe(map(data =>{
    var dogs = this.keyValue.transform(data.message)
    console.log(dogs);
  }))
  .subscribe();
  let dogdata = this.renderer.createText('https://dog.ceo/api/breeds/list/all') 
  this.renderer.appendChild(this.httpBtn?.nativeElement, dogdata)
}

buttonClick2(){
  fromEvent(this.button?.nativeElement,'click')
  .pipe(map(ev=> (ev as any).clientX))
  .subscribe(res=> console.log(res)
  )
}

values = [
  {name:'John',
  age:30
  },
  {
    name:'alex',
    age:40
  }
]





  ngAfterViewInit(){
    this.buttonClick()
    fromEvent(this.name?.nativeElement, 'keyup')
    .subscribe(res =>console.log(res)
    )
  }

  ngOnInit() {
    
    // this.obsopr.subscribe(
    //    val=> {
    //     this.data.push(val)
    //     console.log(this.data);
        
    //   }
    // )

    this.customOperator(this.obsopr).subscribe();
    
    // this.obs.subscribe( {
    //   next: (val) => {
    //     console.log(val);
    //   }, //next callback
    //   error: (error) => {
    //     console.log('error');
    //   }, //error callback
    //   complete:() => {
    //     console.log('Completed');
    //   } //complete callback
    // });


//filter

    of(1,2,3,4,5,6,7,8,9,10).pipe(
      filter((val)=>{
        return val%2 == 0
      })
    ).subscribe({
      next: (val) => console.log(+ val)
    }
    // val =>  console.log(val)
)

      from(this.values)
      .pipe(
        filter((val)=>{
          return val.age >30
        })
      )
      .subscribe({
        next:(val)=>console.log(val)
      })

//Tap
of(1,2,3,4,5)
.pipe(
  tap((val)=>{
    val= val+1
    console.log('Tap ' + val);
    return val
  }) ).subscribe({
    next:(val) => console.log('at subscriber ' + val)
})


of(1,2,3,4,5)
.pipe(
  tap(val=>{
    console.log("before " + val);
  }),
  map(val=>{
    return val+5;
  }),
  tap(val=>{
    console.log("after " + val);
    
  })
) .subscribe(
  val => console.log(val)
)

of(1,2,3,4,5)
  .pipe(
    tap(val=>{
      console.log("Before" + val);
    }),
    map(val=>{
        if(val == 3){
          throw Error
        }
        return val + 5;
    }),
    tap(
      val=>{
        console.log("After" + val);
      },
      err =>{
        console.log("Tap Error");
        console.log(err);
      },
      () =>{
        console.log("Tap Complete");
      }
    )
  ).subscribe(
    val => console.log(val)
    
  )


    // old before rxjs 6.4

    // this.obs.subscribe(
    //   val=> {console.log(val,
    //     );
    //   },
    //   error => {console.log("error")
    //   },
    //   () => {console.log("complete")

    //   }
    // )
  }


  ngOnDestroy(){
    this.buttonSubscription.unsubscribe()
  }

}





// export interface Observer<T> {  
//   next: (value: T) => void;  
//   error: (err: any) => void;  
//   complete: () => void;  
// }