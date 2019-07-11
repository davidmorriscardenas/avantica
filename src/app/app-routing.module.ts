import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaRequestComponent } from './components/lista-request/lista-request.component';
import { ManageDataComponent } from './components/manage-data/manage-data.component';

const routes: Routes = [
  { path: 'managedata', component: ManageDataComponent },
  { path: 'listarequest', component: ListaRequestComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'managedata' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
