import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RamaCientificaComponent } from './rama-cientifica/rama-cientifica.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { TipoConsecutivoComponent } from './tipo-consecutivo/tipo-consecutivo.component';
import { ConsecutivosComponent } from './consecutivos/consecutivos.component';
import { RolesComponent } from './roles/roles.component';
import { PuestosComponent } from './puestos/puestos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { ErroresComponent } from './errores/errores.component';
import { BitacorasExperimentalesComponent } from './bitacoras-experimentales/bitacoras-experimentales.component';
import { NivelAcademicoComponent } from './nivel-academico/nivel-academico.component';
import { HomeComponent } from './home/home.component';
import { CompraProyectoComponent } from './CompraProyectos/compra-proyecto/compra-proyecto.component';

const routes: Routes = [
  {path: 'pagina-principal', component: PaginaPrincipalComponent},
  {path: 'rama-cientifica', component: RamaCientificaComponent},
  {path: 'tipo-consecutivo', component: TipoConsecutivoComponent},
  {path: 'consecutivo', component: ConsecutivosComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'puestos', component: PuestosComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'bitacora', component: BitacoraComponent},
  {path: 'errores', component: ErroresComponent},
  {path: 'bitacoras-experimentales', component: BitacorasExperimentalesComponent},
  {path: 'nivel-academico', component: NivelAcademicoComponent},
  { path: 'inicio', component: HomeComponent },
  { path: 'CompraProyectos', component: CompraProyectoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PaginaPrincipalComponent, RamaCientificaComponent,
  TipoConsecutivoComponent, ConsecutivosComponent, RolesComponent, PuestosComponent,
  UsuariosComponent, BitacoraComponent, ErroresComponent, BitacorasExperimentalesComponent, NivelAcademicoComponent, HomeComponent]
