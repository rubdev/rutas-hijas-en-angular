import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-informacion',
  template: `
    <p>
      usuario-informacion works!
    </p>
  `,
  styles: []
})
export class UsuarioInformacionComponent implements OnInit {

  constructor( private ruta: ActivatedRoute ) {
    this.ruta.parent.params.subscribe( parametros => {
      console.log(`Parámetros de la ruta hija: ${ parametros.id }`);
    });
   }

  ngOnInit() {
  }

}
