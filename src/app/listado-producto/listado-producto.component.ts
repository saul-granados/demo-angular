import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { PruductoService } from '../service/pruducto.service';
import { MatTableDataSource } from '@angular/material/table';
import { IProudcto } from '../interfaces/producto.interface';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.scss']
})
export class ListadoProductoComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  protected dataSource = new MatTableDataSource<IProudcto>();
  protected displayedColumns: string[];

  @Output() editaProducto = new EventEmitter<IProudcto>();

  constructor(
    private service: PruductoService
  ) {
    this.displayedColumns = ['nombre','categoria','moneda','estatus','acciones'];


  }

  ngOnInit(): void {
    this.cargaListado();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  onClickEditar( producto: IProudcto ): void {
    this.editaProducto.emit(producto);
  }

  private cargaListado(): void {
    this.service.findAll()
    .subscribe({
      next: (response) => {
        this.dataSource.data = response;
        //console.log(this.dataSource.data);
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
