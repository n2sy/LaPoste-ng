import { RouterModule, Routes } from '@angular/router';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { InfosComponent } from './infos/infos.component';

let myRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: InfosComponent },
  { path: 'servers', component: ManageServersComponent },
  { path: 'ms-word', component: MsWordComponent },
];

export const POSTE_ROUTING = RouterModule.forRoot(myRoutes);
