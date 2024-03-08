import { HttpClient, HttpHeaders } from '@angular/common/http';
import { credenciales, environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.url}/security/oauth/token`;
  }

  login( username: string, password: string ): Observable<any> {

    let cliente = credenciales.desarrollo.cliente;;
    let secret = credenciales.desarrollo.secret;;

    const credentials = btoa(cliente +  ':' + secret);
    const httpHeaders = new HttpHeaders(
      {
        'Content-type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + credentials
      });

      let params = new URLSearchParams();
      params.set('grant_type', 'password');
      params.set('username', username);
      params.set('password', password);

      return this.http.post( this.url, params.toString(), {headers :  httpHeaders});
  }

  guardaToken( token: string ): void {
    localStorage.setItem('token', token);
  }


}
