import { ListServeurComponent } from './list-serveur/list-serveur.component';
import { InfoServeurComponent } from './info-serveur/info-serveur.component';
import { EditServeurComponent } from './edit-serveur/edit-serveur.component';
import { RouterModule, Routes } from '@angular/router';

let subRoutes: Routes = [
  {
    path: 'serveurs',
    component: ListServeurComponent,
    children: [
      { path: ':id', component: InfoServeurComponent },
      { path: ':id/edit', component: EditServeurComponent },
    ],
  },
];

export const SUB_ROUTING = RouterModule.forChild(subRoutes);
