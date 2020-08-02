import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { UserbarComponent } from './userbar/userbar.component';
import { RamaCientificaComponent } from './rama-cientifica/rama-cientifica.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TipoConsecutivoComponent } from './tipo-consecutivo/tipo-consecutivo.component';
import { ConsecutivosComponent } from './consecutivos/consecutivos.component';
import { RolesComponent } from './roles/roles.component';
import { PuestosComponent } from './puestos/puestos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { ErrorexzComponent } from './errorexz/errorexz.component';
import { ErroresComponent } from './errores/errores.component';
import { BitacorasExperimentalesComponent } from './bitacoras-experimentales/bitacoras-experimentales.component';
import { NivelAcademicoComponent } from './nivel-academico/nivel-academico.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    PaginaPrincipalComponent,
    UserbarComponent,
    RamaCientificaComponent,
    routingComponents,
    LoginComponent,
    HomeComponent,
    TipoConsecutivoComponent,
    ConsecutivosComponent,
    RolesComponent,
    PuestosComponent,
    UsuariosComponent,
    BitacoraComponent,
    ErrorexzComponent,
    ErroresComponent,
    BitacorasExperimentalesComponent,
    NivelAcademicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }