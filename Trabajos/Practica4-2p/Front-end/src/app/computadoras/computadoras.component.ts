import { Component, OnInit } from '@angular/core';
import { ServicioComputadoraService } from '../service/servicio-computadora.service';
import { Computadora } from '../models/computadora.model';
import { ComputadoraCreate } from '../models/computadoraCreate.model';

@Component({
  selector: 'app-computadoras',
  templateUrl: './computadoras.component.html',
  styleUrls: ['./computadoras.component.css']
})
export class ComputadoraComponent implements OnInit {
  computadoras: Computadora[] = [];
  computadoraCR: ComputadoraCreate = {
    name: '',
    costoxhora: 0
  };

  constructor(private servicioBackend: ServicioComputadoraService) { }

  ngOnInit(): void {
    this.ObtenerComputadoras();
  }

  ObtenerComputadoras(): void {
    this.servicioBackend.getComputadoras().subscribe((respuesta: any) => {
      this.computadoras = respuesta.computadoras;
      console.log(respuesta);
    });
  }

  RegistrarComputadora(): void {
    this.servicioBackend.registrarComputadora(this.computadoraCR).subscribe(response => {
      console.log('Computadora registrada exitosamente:', response);
      window.location.reload();
    });
  }

  ModificarComputadora(computadora: Computadora): void {
    console.log(computadora);
    this.servicioBackend.actualizarComputadora(computadora).subscribe(response => {
      console.log('Prestamista actualizado exitosamente:', response);
      this.ObtenerComputadoras();
    });
  }

  EliminarComputadora(id: number): void {
    this.servicioBackend.eliminarComputadora(id).subscribe(response => {
      console.log('Computadora eliminada exitosamente:', response);
      this.ObtenerComputadoras();
    });
  }
}
