import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { from } from 'rxjs';


@Component({
  selector: 'app-createobservable',
  templateUrl: './createobservable.component.html',
  styleUrls: ['./createobservable.component.scss']
})
export class CreateobservableComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {

    // Observable using create
    const obsUsingCreate = Observable.create((Observer:any) =>{
        Observer.next('1')
        Observer.next('2')
        Observer.complete()
    })

    obsUsingCreate
      .subscribe((val:any) => console.log(val),
       (error:any)=> console.log("error"),
      () => console.log("complete"))


    //Observable Using Constructor
    const obsUsingConstructor = new Observable( observer => {
       observer.next( '1' )
       observer.next( '2' )
       observer.next( '3' )
  
       observer.complete()
    })
  
    obsUsingConstructor
         .subscribe(val => console.log(val),
                 error=> console.log("error"),
                 () => console.log("complete"))



     const array = [1,2,3,4,5,6,7]
    const obsof1 = of(array);
     obsof1.subscribe(val => console.log(val),
                  error => console.log("error"),  
                  () => console.log("complete"))

  const array1 = [1,2,3,4,5,6,7]
  const array2 = ['a','b','c','d','e','f','g','h']

  const obsof2 = of(array1,array2);

  obsof2.subscribe(val => console.log(val),
                  error => console.log("error"),
                  () => console.log("complete")           
  )

    const  obsof3 = of(1,2,3);
  obsof3.subscribe(val => console.log(val),
    error=>console.log("error"),
    ()=> console.log("complete")
    
  )

  const  obsof4 = of('Hello', 'world');
  obsof4.subscribe(val => console.log(val),
    error=>console.log("error"),
    ()=> console.log("complete")
    
  )

  const obsof = of(100,[1,2,3,4,5,6,7],'Hello world');
  obsof.subscribe(val => console.log(val),
            error => console.log("error"),
            ()=> console.log('Complete'))

            const arrayfrom = [1,2,3,4,5,6,7]
            const obsfrom = from(arrayfrom);
            obsfrom.subscribe (val => console.log(val),
                    error => console.log('error'),
                    () => console.log("complete")
                     
            )

            const obsfrom2 = from("Hey")
                   obsfrom2.subscribe (val => console.log(val),
                           error=> console.log("error"),
                           () => console.log("complete")
                           
                   )

                   const myMap = new Map()
                   myMap.set(0,'hey')
                   myMap.set(1,'world')
                   const obsfrom3 = from (myMap);
                   obsfrom3.subscribe(val => console.log(val),
                           error => console.log('error'),
                           () => console.log('complete')
                           )


                    const obs = from (this.five())
                           obs.subscribe (val => console.log(val),
                           error => console.log("error"),
                           () => console.log("complete "),          
                    )
                        
                  const promiseSource = from (new Promise (resolve => resolve('promise World')));
                  const obs2 = from (promiseSource);
                  obs2.subscribe (val => console.log(val),
                        error => console.log('error'),
                        () => console.log('complete')     
                    )
                           
 }






 *five(){
  var i= 0;
  while (i<5){
    i= i+1;
    // console.log(i);
    yield i;
    
  }
}
















}


