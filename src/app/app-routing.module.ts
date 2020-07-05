import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './Componentes/pagina-principal/pagina-principal.component';
import { HomeComponent } from './Componentes/home/home.component';
import { LoginComponent } from './Componentes/login/login.component';
import { NewUserComponent } from './Componentes/new-user/new-user.component';
import { RamaCientificaComponent } from './Componentes/rama-cientifica/rama-cientifica.component';
import { CodigoCientificoComponent } from './Componentes/codigo-cientifico/codigo-cientifico.component';
import { ConsecutivoComponent } from './Componentes/consecutivo/consecutivo.component';
import { RolesComponent } from './Componentes/roles/roles.component';
import { PuestosComponent } from './Componentes/puestos/puestos.component';
import { UsuariosComponent } from './Componentes/usuarios/usuarios.component';
import { BitacoraComponent } from './Componentes/bitacora/bitacora.component';
import { ErroresComponent } from './Componentes/errores/errores.component';
import { BitacoraExperimentalComponent } from './Componentes/bitacora-experimental/bitacora-experimental.component';

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
