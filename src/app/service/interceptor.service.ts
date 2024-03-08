import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = localStorage.getItem('token');
    let request = req;
    if( token != null ) {

      let url: string = request.url;

      if(!url.includes('api/security/oauth/token')) {

        console.log(url);
        request = req.clone({
          setHeaders : {
            authorization: `Bearer ${ token }`
          }
        });
      }
    }


    return next.handle(request).pipe(
      catchError( (err: HttpResponse<any>) => {

        if(err.status === 401) {
          localStorage.clear();
          this.router.navigate(['/login']);
        }

        return throwError( err );

      })
    );


  }
}
