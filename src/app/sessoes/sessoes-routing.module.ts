import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessoesComponent } from './sessoes.component';

const routes: Routes = [{ path: '', component: SessoesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessoesRoutingModule { }
