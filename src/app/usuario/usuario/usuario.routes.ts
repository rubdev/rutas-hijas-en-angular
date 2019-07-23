import { Routes } from '@angular/router';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioInformacionComponent } from './usuario-informacion.component';


export const RUTAS_USUARIO: Routes = [
    { path: 'añadir', component: UsuarioNuevoComponent },
    { path: 'editar', component: UsuarioEditarComponent },
    { path: 'ver', component: UsuarioInformacionComponent },
    { path: '', pathMatch: 'full', redirectTo: 'ver' },
]
