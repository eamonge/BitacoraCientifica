import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { RamaCientificaComponent } from './rama-cientifica/rama-cientifica.component';
import { CodigoCientificoComponent } from './codigo-cientifico/codigo-cientifico.component';
import { ConsecutivoComponent } from './consecutivo/consecutivo.component';
import { RolesComponent } from './roles/roles.component';
import { PuestosComponent } from './puestos/puestos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { ErroresComponent } from './errores/errores.component';
import { BitacoraExperimentalComponent } from './bitacora-experimental/bitacora-experimental.component';

const routes: Routes = [
  { path: 'main', component: PaginaPrincipalComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new_user', component: NewUserComponent },
  { path: 'rama_cientifica', component: RamaCientificaComponent },
  { path: 'codigo', component: CodigoCientificoComponent },
  { path: 'consecutivos', component: ConsecutivoComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'puestos', component: PuestosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'bitacora', component: BitacoraComponent },
  { path: 'errores', component: ErroresComponent },
  { path: 'bitacora_experimental', component: BitacoraExperimentalComponent}
]




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PaginaPrincipalComponent, HomeComponent]
