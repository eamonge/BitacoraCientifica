import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './Componentes/nav-menu/nav-menu.component';
import { HomeComponent } from './Componentes/home/home.component';
import { CounterComponent } from './Componentes/counter/counter.component';
import { FetchDataComponent } from './Componentes/fetch-data/fetch-data.component';
import { NavigationMenuComponent } from './Componentes/navigation-menu/navigation-menu.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
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
import { UserBarComponent } from './Componentes/user-bar/user-bar.component';
import { NivelAcademicoComponent } from './Componentes/nivel-academico/nivel-academico.component';
import {TipoConsecutivosComponent} from './Componentes/TipoConsecutivos/TipoConsecutivos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NavigationMenuComponent,
    routingComponents,
    LoginComponent,
    NewUserComponent,
    RamaCientificaComponent,
    CodigoCientificoComponent,
    ConsecutivoComponent,
    RolesComponent,
    PuestosComponent,
    UsuariosComponent,
    BitacoraComponent,
    ErroresComponent,
    BitacoraExperimentalComponent,
    UserBarComponent,
    NivelAcademicoComponent,
    TipoConsecutivosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
