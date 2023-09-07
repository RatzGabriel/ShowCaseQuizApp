import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'game1',
        loadChildren: () =>
          import('./game1/game1.module').then((m) => m.Game1PageModule),
      },
      {
        path: 'game2',
        loadChildren: () =>
          import('./game2/game2.module').then((m) => m.Game2PageModule),
      },
      {
        path: 'game3',
        loadChildren: () =>
          import('./game3/game3.module').then((m) => m.Game3PageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
