import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsCidadePage } from './es-cidade.page';

const routes: Routes = [
  {
    path: '',
    component: EsCidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsCidadePageRoutingModule {}
