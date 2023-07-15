import { Component, OnInit } from '@angular/core';
import { ServicioPrestamoService } from '../service/servicio-prestamo.service';
import { Prestamo } from '../models/prestamo.model';
import { PrestamoCreate } from '../models/prestamoCreate.model';
import { Computadora } from '../models/computadora.model';
import { Prestamista } from '../models/prestamista.model';
import { ServicioComputadoraService } from '../service/servicio-computadora.service';
import { ServicioPrestamistaService } from '../service/servicio-prestamista.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css']
})
export class PrestamosComponent implements OnInit {
  constructor(private servicioBackend: ServicioPrestamoService,private servicioComputadora: ServicioComputadoraService,
    private servicioPrestamista: ServicioPrestamistaService) { }
  prestamos: Prestamo[] = [];
  computadora: Computadora[] = [];
  prestamistas: Prestamista[] = [];

  ngOnInit(): void {
    this.ObtenerPrestamos();
  }

  ObtenerPrestamos(): void {
    this.servicioBackend.getPrestamos().subscribe((respuesta: any) => {
      this.prestamos = respuesta.prestamos;
      console.log(respuesta);
    });
  
    this.servicioComputadora.getComputadoras().subscribe((respuesta: any) => {
      this.computadora = respuesta.computadoras;
    });
  
    this.servicioPrestamista.getPrestamistas().subscribe((respuesta: any) => {
      this.prestamistas = respuesta.prestamistas;
    });

  }

  PrestamoCR: PrestamoCreate = {
    fecha: '',
    hora: 0,
    numerohorapres: 0,
    computadora: '',
    prestamista: ''
  };

  RegistrarPrestamo() {
    this.servicioBackend.registrarPrestamo(this.PrestamoCR).subscribe(response => {
      console.log('Prestamo registrado exitosamente:', response);
      window.location.reload();
    });
  }

  PrestamoAct: Prestamo = {
    _id: 0,
    fecha: '',
    hora: 0,
    numerohorapres: 0,
    computadora: {} as Computadora,
    prestamista: {} as Prestamista
  };

  ModificarPrestamo(prestamoAct: Prestamo) {
    console.log(prestamoAct);
    this.servicioBackend.actualizarPrestamo(prestamoAct).subscribe(response => {
      console.log('Prestamo actualizado exitosamente:', response);
      this.ObtenerPrestamos();
    });
  }

  EliminarPrestamo(id: number) {
    this.servicioBackend.eliminarPrestamo(id).subscribe(response => {
      console.log('Prestamo eliminado exitosamente:', response);
      this.ObtenerPrestamos();
    });
  }
}
