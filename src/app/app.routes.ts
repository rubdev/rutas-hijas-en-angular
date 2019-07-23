import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario/usuario.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario', component: UsuarioComponent },
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
