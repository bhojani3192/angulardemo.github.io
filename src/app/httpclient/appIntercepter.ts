import {Injectable} from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import {Observable ,} from 'rxjs'
import { GitHubService } from '../core/services/github.service';
import { tap,map, } from 'rxjs/operators';
import {EmptyError} from 'rxjs'







@Injectable()

export class AppHttpIntercepter implements HttpInterceptor{
    constructor(){

    }

       baseURL:string     = "https://www.tektutorialsHub.com/"

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        

        // const newReq = req.clone({
        //     url: this.baseURL + req.url
            
        // })
        // return next.handle(req)
    

        
        req  = req.clone({headers: req.headers.set('Content-Type', 'application/json')})
  
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req.headers.get('Accept')

        req = req.clone({headers: req.headers.delete('Content-Type', 'application/json')})

        console.log(req);

        req = req.clone({ headers: req.headers.append('Content-Type', 'application/json') });


        const  started = Date.now();

   

        // return next.handle(req).pipe(map ((resp:any) => {
        //     const myBody = [{ 'id': '1',
        //                       'name': 'Angular Demo',
        //                       'html_url': 'www.tektutorialshub.com',
        //                       'description': 'description' 
        //                     }];
        //     // on Response
        //     if (resp instanceof HttpResponse) {
        //         console.log(resp);
        //         console.log(resp.body);
        //         resp = resp.clone<any>({ body: myBody});
        //         return resp;
        //     }
        // }))
        
    
        return next.handle(req).pipe(tap(((event:any) => {
            console.log(event);
            const elapsed = Date.now() - started;
            console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
            if (event instanceof HttpResponse) {
                console.log(`Response Received`);
            };
        })))
      
  
     





       

      

        
    
       
     
        

        


        // const token: string = GithubService.Token
        
        // if(token){
        //     req = req.clone({headers: req.headers.set('Authorization' , 'Bearer' +token )})
        // }



    }

}




