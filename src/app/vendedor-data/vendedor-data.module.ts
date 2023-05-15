import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendedorDataPageRoutingModule } from './vendedor-data-routing.module';

import { VendedorDataPage } from './vendedor-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendedorDataPageRoutingModule
  ],
  declarations: [VendedorDataPage]
})
export class VendedorDataPageModule {}
