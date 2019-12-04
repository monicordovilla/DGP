import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Usuarios } from './usuarios.page';
import { HeaderPage } from '../header/header.page';

const routes: Routes = [
  {
    path: '',
    component: Usuarios
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Usuarios, HeaderPage]
})
export class UsuariosModule {}
