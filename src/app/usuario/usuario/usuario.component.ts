import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor( private ruta: ActivatedRoute ) {
    this.ruta.params.subscribe( parametros => {
      console.log(`Parámetros de la ruta hija: ${ parametros.id }`);
    });
   }

  ngOnInit() {
  }

}
