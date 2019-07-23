import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APPROUTING } from './app.routes';


// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { UsuarioNuevoComponent } from './usuario/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario/usuario/usuario-editar.component';
import { UsuarioInformacionComponent } from './usuario/usuario/usuario-informacion.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioInformacionComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APPROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
