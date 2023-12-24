import { Component, OnInit , ViewChild , TemplateRef, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.scss'],

})

export class NgtemplateComponent implements OnInit {


  // @ViewChild('hiTemplate', { read:TemplateRef}) hiTemplate :TemplateRef<any>

  hiTemplate:any
  selected= false;
  selectedThen= false;


  movie:any
  trackById:any;
  num:number= 0;
 
  movies:Movie[] = [
    {title:'zoptia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},
    {title:'Captain American: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},
    {title:'Warcraft',director:'Duncan Jones',cast:'Travis Fimmel, Robert Kazinsky, Ben Foster',releaseDate:'June 10, 2016'},
  ] 


  constructor( private vref: ViewContainerRef  ){
   
  } 



ngAfterViewInit(){
  this.vref.createEmbeddedView(this.hiTemplate)
}
 

  ngOnInit(): void {
  }

}

export class Movie{
  title:string= ""
  director= "";
  cast=""
  releaseDate=""
}
