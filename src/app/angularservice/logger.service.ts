import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class LoggerService {

  log(message:any){
    console.log(message)
  }
  constructor() { }
}
