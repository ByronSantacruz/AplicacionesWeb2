import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestamo } from '../models/prestamo.model';
import { PrestamoCreate } from '../models/prestamoCreate.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioPrestamoService {
  constructor(private http: HttpClient) { }

  getPrestamos(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(
      'http://localhost:2000/v1/inventory/api/Prestamos'
    );
  }

  registrarPrestamo(prestamo: PrestamoCreate): Observable<any> {
    return this.http.post('http://localhost:2000/v1/inventory/api/Prestamos', prestamo);
  }

  actualizarPrestamo(prestamo: Prestamo): Observable<any> {
    return this.http.put(
      `http://localhost:2000/v1/inventory/api/Prestamos/${prestamo._id}`,
      prestamo
    );
  }

  eliminarPrestamo(id: number): Observable<any> {
    return this.http.delete(
      `http://localhost:2000/v1/inventory/api/Prestamos/${id}`
    );
  }
}
