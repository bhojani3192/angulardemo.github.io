import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Person } from './person';


@Component({
  selector: 'app-httppost',
  templateUrl: './httppost.component.html',
  styleUrls: ['./httppost.component.scss']
})
export class HttppostComponent implements OnInit {

  people:any
  person = new Person()

  constructor(private apiService :ApiService) { }

  ngOnInit(): void {
    this.refreshPeople()
  }

  refreshPeople(){
    this.apiService.getPeople().subscribe((data)=>{
        console.log(data);
        this.people = data
        
    })
  }

  addPerson(){
  this.apiService.addPerson(this.person).subscribe((data)=>{
    console.log(data);
    this.refreshPeople();
  })
  }

  getPeopleWithHeader(){
    this.apiService.getPeopleWithHeader().subscribe((data)=>{
      console.log(data);
      this.refreshPeople()
      
    })
  }

  getPeoplwithSet(){
    this.apiService.getPeoplwithSet().subscribe((data)=>{
      console.log(data);
      this.refreshPeople()
    })
  }

  getPeopleImmutable(){
    this.apiService.getPeopleImmutable().subscribe((data)=>{
      console.log(data);
      this.refreshPeople()
    })
  }
  getPeopleImmutable1(){
    this.apiService.getPeopleImmutable().subscribe((data)=>{
      console.log(data);
      this.refreshPeople()
    })
  }
  getPeopleAppend(){
    this.apiService.getPeopleAppend().subscribe((data)=>  {
    console.log(data)
    this.refreshPeople()
  })

  }

  getPeopleHas(){
    this.apiService.getPeopleHas().subscribe((data)=>  {
      console.log(data)
      this.refreshPeople()
    })
  }


  getPeopleGet(){
    this.apiService.getPeopleGet().subscribe((data)=>  {
      console.log(data)
      this.refreshPeople()
    })
  }
  getPeopleGetAll(){
    this.apiService.getPeopleGetAll().subscribe((data)=>  {
      console.log(data)
      this.refreshPeople()
    })
  }

  getPeopleDelete(){
    this.apiService.getPeopleDelete().subscribe((data)=>{
      console.log(data);
      this.refreshPeople()
      
    })
  }

  getPeopleObject(){
    this.apiService.getPeopleObject().subscribe((data)=>{
      console.log(data);
      this.refreshPeople()
      
    })
  }








}
