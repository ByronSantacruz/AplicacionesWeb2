import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestamista } from '../models/prestamista.model';
import { PrestamistaCreate } from '../models/prestamistaCreate.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioPrestamistaService {
  constructor(private http: HttpClient) { }

  getPrestamistas(): Observable<Prestamista[]> {
    return this.http.get<Prestamista[]>(
      'http://localhost:2000/v1/inventory/api/Prestamistas'
    );
  }

  registrarPrestamista(prestamista: PrestamistaCreate): Observable<any> {
    return this.http.post('http://localhost:2000/v1/inventory/api/Prestamistas', prestamista);
  }

  actualizarPrestamista(prestamista: Prestamista): Observable<any> {
    return this.http.put(
      `http://localhost:2000/v1/inventory/api/Prestamistas/${prestamista._id}`,
      prestamista
    );
  }

  eliminarPrestamista(id: number): Observable<any> {
    return this.http.delete(
      `http://localhost:2000/v1/inventory/api/Prestamistas/${id}`
    );
  }
}
