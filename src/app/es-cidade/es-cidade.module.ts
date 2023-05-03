import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsCidadePageRoutingModule } from './es-cidade-routing.module';

import { EsCidadePage } from './es-cidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsCidadePageRoutingModule
  ],
  declarations: [EsCidadePage]
})
export class EsCidadePageModule {}
