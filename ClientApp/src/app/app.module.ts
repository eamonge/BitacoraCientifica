import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
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
import { UserBarComponent } from './user-bar/user-bar.component';

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
    UserBarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule, 
    FormsModule,
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
