import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { typeMoneda } from '../utils/constantes';
import { IEstatus } from '../interfaces/estatus.interface';
import { PruductoService } from '../service/pruducto.service';
import { IProudcto } from '../interfaces/producto.interface';
import { NotificacionService } from '../service/notificacion.service';


interface IMoenda {
  nombre: typeMoneda;
}


@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.scss']
})
export class FormularioProductoComponent {

  protected form: FormGroup;
  protected estatus: IEstatus[];
  protected monedas: IMoenda[];

  @Input() set producto( producto: IProudcto | undefined ) {
    if( producto ) {
      this.form.setValue( producto );
    }
  }


  constructor(
    private builder: FormBuilder,
    private service: PruductoService,
    private notiticaciones: NotificacionService
  ) {

    this.estatus = [{ idestatus: 1, nombre: 'Activo' },{ idestatus: 0, nombre: 'Inactivo' }];
    this.monedas = [{ nombre: 'MXN' }, { nombre: 'DLLS' }];

    this.form = this.builder.group({
      idproducto: new FormControl(0),
      nombre: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      moneda: new FormControl('', Validators.required),
      estatus: new FormControl({ value: 1, disabled: true }, Validators.required),
    });



  }

  ngOnInit(): void {

    // this.form.get('nombre')?.valueChanges.subscribe( value => {
    //   console.log(value);
    // });

    setTimeout(() => {
      console.log('Emitiendo');
      this.notiticaciones.notificarUpload.emit({
        nombre: 'producto',
        payload: 0
      })
    }, 5000);

  }

  ngAfterViewChecked(): void {
    // if( this.producto ) {
    //   this.form.setValue( this.producto );
    //   //console.log('Soy el ngAfterViewChecked', this.producto);
    // }

  }

  get f(){ return this.form.controls }

  protected onClickGuardar(): void {


    this.service.save( this.form.getRawValue() as IProudcto )
    .subscribe({
      next: (response) => {
        console.log(response);
      }, error: (error) => {
        console.error(error.error.mensaje);
      }, complete: () => {
        this.form.reset();
        this.form.get('estatus')?.setValue(1);
      }
    });


  }


}
