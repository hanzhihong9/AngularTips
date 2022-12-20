import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home1',
    loadChildren: () =>
      import('./home/home.component1').then((m) => m.HomeModule1),
  },
  {
    path: 'home2',
    loadChildren: () =>
      import('./home/home.component2').then((m) => m.HomeModule2),
  },
  {
    path: '',
    redirectTo: 'home1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}