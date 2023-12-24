import { Component, Input, OnInit ,TemplateRef } from '@angular/core';


@Component({
  selector: 'app-outletchild',
  templateUrl: './outletchild.component.html',
  styleUrls: ['./outletchild.component.scss']
})
export class OutletchildComponent implements OnInit {
  
  @Input() customTemplate:any;
  @Input() items: any[] = [];
  @Input() itemTemplate:any 

  constructor(){                                                                                                                    
  }

  ngOnInit(): void {
  }

}
