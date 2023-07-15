import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computadora } from '../models/computadora.model';
import { ComputadoraCreate } from '../models/computadoraCreate.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioComputadoraService {

  constructor(private http: HttpClient) { }

  getComputadoras(): Observable<Computadora[]> {
    return this.http.get<Computadora[]>(
      'http://localhost:2000/v1/inventory/api/Computadoras'
    );
  }

  registrarComputadora(computadora: ComputadoraCreate): Observable<any> {
    return this.http.post('http://localhost:2000/v1/inventory/api/Computadoras', computadora);
  }

  actualizarComputadora(computadora: Computadora): Observable<any> {
    return this.http.put(
      `http://localhost:2000/v1/inventory/api/Computadoras/${computadora._id}`,
      computadora
    );
  }

  eliminarComputadora(id: number): Observable<any> {
    return this.http.delete(
      `http://localhost:2000/v1/inventory/api/Computadoras/${id}`
    );
  }
}
