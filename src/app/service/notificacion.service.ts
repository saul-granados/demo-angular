import { EventEmitter, Injectable } from '@angular/core';

interface IEmiter {
  nombre: string;
  payload: any;
}

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  private notificacion = new EventEmitter<IEmiter>();

  constructor() { }

  get notificarUpload(): EventEmitter<IEmiter>{
    return this.notificacion;
  }


}
