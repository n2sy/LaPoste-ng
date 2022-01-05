import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditServeurComponent } from './edit-serveur/edit-serveur.component';
import { ListServeurComponent } from './list-serveur/list-serveur.component';
import { InfoServeurComponent } from './info-serveur/info-serveur.component';
import { SUB_ROUTING } from './sub.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditServeurComponent,
    ListServeurComponent,
    InfoServeurComponent,
  ],
  imports: [CommonModule, SUB_ROUTING, FormsModule],
})
export class SubModule {}
