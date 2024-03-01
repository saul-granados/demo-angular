import { Component } from '@angular/core';
import { IProudcto } from '../interfaces/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

  protected producto!: IProudcto;

}
