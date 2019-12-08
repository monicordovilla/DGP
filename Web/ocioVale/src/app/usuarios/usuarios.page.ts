import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ProveedorService} from '../providers/proveedor.service';

@Component({
  selector: 'usuarios',
  templateUrl: 'usuarios.page.html',
  styleUrls: ['usuarios.page.scss'],
})
export class Usuarios implements OnInit {

  datos = [ ];

  users = [ ];

  perfil = {
    "valoracion" : ''
  };

  
  // 0 pagina usuarios, 1 gestor, 2 socio, 3 socio familiar y 4 voluntario
  mostrado = 0;

  filtroTipo(){
    this.mostrado = 0;

    var e = (document.getElementById("rol")) as HTMLSelectElement;
    var rol = (document.getElementById("rol")).innerHTML;
    //var sel = e.selectedIndex;
    //var opt = e.options[sel];
    //var CurValue = (<HTMLSelectElement>opt).value;
    //var CurText = (<HTMLSelectElement>opt).text;
    //console.log(rol);
    //console.log(opt);
    console.log('valor del select'+ rol);
  }

  constructor(public proveedor:ProveedorService) {
    this.cargaValoracion();
    this.cargaUsuarios();
  }

  cargaValoracion(){

    this.proveedor.obtenerValoracion().subscribe(
      (data) => {
        this.datos = data;

        for(var i=0; i<this.datos.length; i++){          
          this.perfil.valoracion = this.datos[i].puntuacion;
        }
      },
      error => {
          console.log(<any>error);
      }
    ) 
  }

  cargaUsuarios(){
    
    let nombre;
    let apellidos;
    let nombreUsuario;
    let valoracionMedia;


    this.proveedor.obtenerUsuarios().subscribe(
      (data) => {
        this.users = data;

        for(var i=0; i<this.users.length; i++){
          nombre = this.users[i].nombre;
          apellidos = this.users[i].apellidos;
          nombreUsuario = "@" + this.users[i].username;
        }
      },
      error => {
          console.log(<any>error);
      }
    ) 

  }

  ngOnInit() {
  }

}
