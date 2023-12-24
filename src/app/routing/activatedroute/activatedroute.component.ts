import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activatedroute',
  templateUrl: './activatedroute.component.html',
  styleUrls: ['./activatedroute.component.scss']
})
export class ActivatedrouteComponent implements OnInit {

  sort:any;
  fragment:any;

  constructor( public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
