import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnoncePage } from '../add-annonce/add-annonce.page';
import { AnnoncePage } from './annonces.page';

const routes: Routes = [
  {
    path: '',
    component: AnnoncePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
