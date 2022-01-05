import { RouterModule, Routes } from '@angular/router';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';

let myRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cv',
    component: CvComponent,
    children: [
      // { path: '', component: CvComponent },
      { path: 'add', component: AddComponent },
      { path: ':id', component: InfosComponent },
      { path: 'edit/:id', component: EditComponent },
    ],
  },
  { path: 'servers', component: ManageServersComponent },
  { path: 'ms-word', component: MsWordComponent },
  {
    path: 'serveurs',
    loadChildren: () =>
      import('../app/sub/sub.module').then((m) => m.SubModule),
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const POSTE_ROUTING = RouterModule.forRoot(myRoutes);
