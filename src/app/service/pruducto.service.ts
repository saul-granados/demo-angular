import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProudcto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class PruductoService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = `${environment.url}/demo/producto`;
  }

  findAll(): Observable<IProudcto[]> {
    return this.http.get<IProudcto[]>(this.url);
  }

  findById( id: number ): Observable<IProudcto> {
    return this.http.get<IProudcto>(this.url + '/' + id);
  }

  save( producto: IProudcto ): Observable<IProudcto> {
    return this.http.post<IProudcto>(this.url, producto);
  }


}
