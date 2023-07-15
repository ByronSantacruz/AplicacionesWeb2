import { Component, OnInit } from '@angular/core';
import { ServicioPrestamistaService } from "../service/servicio-prestamista.service";
import { Prestamista } from "../models/prestamista.model";
import { PrestamistaCreate } from '../models/prestamistaCreate.model';

@Component({
  selector: 'app-prestamistas',
  templateUrl: './prestamistas.component.html',
  styleUrls: ['./prestamistas.component.css']
})
export class PrestamistasComponent implements OnInit {
  datos: Prestamista[] = [];
  usuarioSeleccionado: Prestamista | null = null;
  nuevaPrestamista: PrestamistaCreate = {
    name: '',
    identificacion: ''
  };

  constructor(private servicioBackend: ServicioPrestamistaService) { }

  ngOnInit(): void {
    this.ObtenerDatos();
  }

  ObtenerDatos(): void {
    this.servicioBackend.getPrestamistas().subscribe((respuesta: any) => {
      this.datos = respuesta.prestamistas;
      console.log(respuesta);
    });
  }

  AgregarDato(): void {
    this.servicioBackend.registrarPrestamista(this.nuevaPrestamista).subscribe(response => {
      console.log('Prestamista agregado exitosamente:', response);
      this.ObtenerDatos();
      this.nuevaPrestamista = {
        name: '',
        identificacion: ''
      };
    });
  }

  ObtenerDatosE(datoO: Prestamista): void {
    this.usuarioSeleccionado = datoO;
    console.log(this.usuarioSeleccionado._id);
  }

  ModificarDatos(prestamista: Prestamista): void {
    console.log(prestamista);
    this.servicioBackend.actualizarPrestamista(prestamista).subscribe(response => {
      console.log('Prestamista actualizado exitosamente:', response);
      this.ObtenerDatos();
    });
  }

  EliminarDatos(id: number): void {
    this.servicioBackend.eliminarPrestamista(id).subscribe(response => {
      console.log('Prestamista eliminado exitosamente:', response);
      this.ObtenerDatos();
    });
  }
}