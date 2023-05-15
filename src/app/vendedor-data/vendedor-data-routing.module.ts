import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorDataPage } from './vendedor-data.page';

const routes: Routes = [
  {
    path: '',
    component: VendedorDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendedorDataPageRoutingModule {}
