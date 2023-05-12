import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteDataPageRoutingModule } from './cliente-data-routing.module';

import { ClienteDataPage } from './cliente-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteDataPageRoutingModule
  ],
  declarations: [ClienteDataPage]
})
export class ClienteDataPageModule {}
