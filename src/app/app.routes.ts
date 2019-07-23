import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';
import { UsuarioNuevoComponent } from './usuario/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario/usuario/usuario-editar.component';
import { UsuarioInformacionComponent } from './usuario/usuario/usuario-informacion.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { 
        path: 'usuario/:id',
        component: UsuarioComponent,
        children: [
            { path: 'añadir', component: UsuarioNuevoComponent },
            { path: 'editar', component: UsuarioEditarComponent },
            { path: 'ver', component: UsuarioInformacionComponent },
            { path: '', pathMatch: 'full', redirectTo: 'ver' },
        ]
    },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
