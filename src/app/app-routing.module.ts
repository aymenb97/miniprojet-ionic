import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'annonces',
    loadChildren: () =>
      import('./annonces/annonces.module').then((m) => m.AnnoncesModule),
  },
  {
    path: 'annonces/:id',
    loadChildren: () =>
      import('./annonce-details/annonce-details.module').then(
        (m) => m.AnnonceDetailsPageModule
      ),
  },
  {
    path: 'ajouter-annonce',
    loadChildren: () =>
      import('./add-annonce/add-annonce.module').then(
        (m) => m.AddAnnoncePageModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'mes-annonces',
    loadChildren: () =>
      import('./mes-annonces/mes-annonces.module').then(
        (m) => m.MesAnnoncesPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
