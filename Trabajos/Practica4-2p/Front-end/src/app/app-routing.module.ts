import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputadoraComponent } from './computadoras/computadoras.component';
import { PrestamistasComponent } from './prestamistas/prestamistas.component';
import { PrestamosComponent } from './prestamos/prestamos.component';

const routes: Routes = [
  {path:'prestamistas',component:PrestamistasComponent},
  {path:'computadoras',component:ComputadoraComponent},
  {path:'prestamos',component:PrestamosComponent},
  { path: '**', component: ComputadoraComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
