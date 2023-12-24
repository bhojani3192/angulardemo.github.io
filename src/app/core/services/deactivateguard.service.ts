import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from '../../register/register.component';
import { IDeactivatecomponent } from './deactivatecomponent';
@Injectable({
  providedIn: 'root'
})
export class DeactivateguardService  {

  component:any = Object;
  route:any =  ActivatedRouteSnapshot;

  constructor() { }

  canDeactivate(component:IDeactivatecomponent, route:ActivatedRouteSnapshot, state:RouterStateSnapshot, nextState:RouterStateSnapshot): Observable<boolean> | Promise <boolean> | boolean{
    return component.canExit ? component.canExit():true;
  }


}
