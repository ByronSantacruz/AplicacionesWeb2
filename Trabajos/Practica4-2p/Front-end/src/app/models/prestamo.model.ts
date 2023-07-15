import { Computadora } from "./computadora.model";
import { Prestamista } from "./prestamista.model";

export interface Prestamo {
    _id: number;
    fecha: string;
    hora: number;
    numerohorapres: number;
    computadora: Computadora;
    prestamista:Prestamista;
  }
  