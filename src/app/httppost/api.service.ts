import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Person } from './person';
import {Observable, catchError} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL:string = "http://localhost:3000/"


  constructor(private http: HttpClient) {
    
   }

   getPeople():Observable <Person[]>{
    console.log('getPeople ' + this.baseURL + 'people');
    return this.http.get<Person[]>(this.baseURL+'people')
   }

   getPeopleWithHeader():Observable <Person[]>{
    const headers = {'content-type':'application/json'}
    console.log(headers);

    return this.http.get<Person[]>(this.baseURL + 'people', {'headers':headers})
    
   }    

   getPeoplwithSet():Observable <Person[]>{
    const headers = new HttpHeaders()
        .set('contetnt-type','application/json')
        .set('Access-Control-Allow-Origin', '*')

        console.log(headers);
        return this.http.get<Person[]>(this.baseURL + 'people' , {'headers': headers})
        
   }


   getPeopleImmutable():Observable <Person[]>{
    const headers = new HttpHeaders()
      headers.set('contetnt-type','application/json')
      headers.set('Access-Control-Allow-Origin', '*')
       console.log(headers);
    
      return this.http.get<Person[]>(this.baseURL+ 'people', {'headers': headers})
   }

   getPeopleImmutable1():Observable <Person[]>{
    const headers = new HttpHeaders()
     headers.set('contetnt-type','application/json')
     headers.set('Access-Control-Allow-Origin', '*')
       console.log(headers);
      return this.http.get<Person[]>(this.baseURL+ 'people', {'headers': headers})
   }


  getPeopleAppend():Observable <Person[]>{
      const headers = new HttpHeaders()

   headers.append('content-type','application/json'),
   headers.append('Access-Control-Allow-Origin' , '*'),
   headers.append('content-type','application/x-www-form-urlencoded'),
   headers.append('customer-header' , 'custom'),
      
   console.log(headers);
    return this.http.get<Person[]>(this.baseURL + 'people', {'headers':headers})
  }

  getPeopleHas() : Observable <Person[]>{
    const headers = new HttpHeaders()

    headers.append('Access-Control-Allow-Origin' , '*')
    if(!headers.has('content-type')){
      headers.append('content-type', 'application/json')
    }

    console.log(headers);
    return this.http.get<Person[]>(this.baseURL + 'people', {'headers':headers})
    
  }
  getPeopleGet() : Observable <Person[]>{
    const headers = new HttpHeaders()
        .set ('contetnt-type','application/json')
        .set ('Access-Control-Allow-Origin' , '*')

        const h = headers.get("content-type")
        if(h == null){
          console.log("content-type header not present");
        }else{
          console.log(h);
          
        }
   
    return this.http.get<Person[]>(this.baseURL + 'people', {'headers':headers})
    
  }

  getPeopleGetAll(): Observable <Person[]>{
    const headers = new HttpHeaders()
    .set ('contetnt-type','application/json')
    .set ('Access-Control-Allow-Origin' , '*')
    .append('content-type','application/x-www-form-urlencoded')

    const h = headers.getAll('content-type')
    console.log(h);
    
    return this.http.get<Person[]>(this.baseURL + 'people', {'headers':headers})

  }

  getPeopleDelete(): Observable <Person[]>{

    const headers = new HttpHeaders()
    .set ('contetnt-type','application/json')
    .set ('Access-Control-Allow-Origin' , '*')
    .append('content-type','application/x-www-form-urlencoded')

     headers.delete('content-type','application/json')

     console.log(headers);
     

    return this.http.get<Person[]>(this.baseURL + 'people', {'headers':headers})
  } 


  getPeopleObject():Observable <Person[]>{
    const headers = new HttpHeaders ({'Accsess-Controll-Allow-Origine': '*' , 'content-type': 'application/json'})

    console.log(headers);

    return this.http.get<Person[]>(this.baseURL + 'people' , {'headers': headers})
    
  }







   addPerson(person:Person):Observable <Person[]>{
    const headers = {'content-Type':'application/json'}
    const params =  new HttpParams()  
    .set ('para1', 'value1')
    .set ('para2', 'value2');
    
    const body = JSON.stringify(person)
    console.log(body)

   



    return this.http.post<Person[]>(this.baseURL + 'people?', body,  {'headers':headers, 'params':params,  withCredentials: true})
    // return this.http.post<Person[]>(this.baseURL + 'people?para=value1&para2=value2', body,  {'headers':headers, 'params':params,  withCredentials: true})
    .pipe(
      // map((response:any) =>{
      //   return response
      // }) ,

      catchError((err)=>{
        console.log(err);
        throw err
        
      })
    )
    
   }
   

}
