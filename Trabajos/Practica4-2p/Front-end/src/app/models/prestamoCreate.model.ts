import { Computadora } from "./computadora.model";
import { Prestamista } from "./prestamista.model";

export interface PrestamoCreate {
    fecha: string;
    hora: number;
    numerohorapres: number;
    computadora: string;
    prestamista:string;
  }
  