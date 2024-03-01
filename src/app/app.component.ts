import { Component } from '@angular/core';
import { NotificacionService } from './service/notificacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  constructor(
    private notiticaciones: NotificacionService
  ) { }

  ngOnInit(): void {
    this.notiticaciones.notificarUpload.subscribe((response) => {
      if( response.nombre == 'producto' ) {
        console.log(response);
      }
    })

  }
}
