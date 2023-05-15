import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'meus-enderecos',
    loadChildren: () => import('./meus-enderecos/meus-enderecos.module').then( m => m.MeusEnderecosPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'pagamentos',
    loadChildren: () => import('./pagamentos/pagamentos.module').then( m => m.PagamentosPageModule)
  },
  {
    path: 'pedidos',
    loadChildren: () => import('./pedidos/pedidos.module').then( m => m.PedidosPageModule)
  },
  {
    path: 'es-cidade',
    loadChildren: () => import('./es-cidade/es-cidade.module').then( m => m.EsCidadePageModule)
  },
  {
    path: 'cliente-data',
    loadChildren: () => import('./cliente-data/cliente-data.module').then( m => m.ClienteDataPageModule)
  },
  {
    path: 'cliente-data',
    loadChildren: () => import('./cliente-data/cliente-data.module').then( m => m.ClienteDataPageModule)
  },  {
    path: 'vendedor-data',
    loadChildren: () => import('./vendedor-data/vendedor-data.module').then( m => m.VendedorDataPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
