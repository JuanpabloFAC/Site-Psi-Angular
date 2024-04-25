import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: 'sobre', loadChildren: () => import('./sobre/sobre.module').then(m => m.SobreModule) },
  
  { path: 'sessoes', loadChildren: () => import('./sessoes/sessoes.module').then(m => m.SessoesModule) },
  
  { path: 'agenda', loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule) },
  
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) },

  { path: "", redirectTo: "sobre", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
