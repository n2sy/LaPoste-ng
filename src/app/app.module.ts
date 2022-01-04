import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { FilsComponent } from './fils/fils.component';
import { CvComponent } from './cv/cv.component';
import { ItemComponent } from './item/item.component';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { ItemAccountComponent } from './accounts/item-account/item-account.component';
import { DirectComponent } from './direct/direct.component';

@NgModule({
  declarations: [AppComponent, StartComponent, FilsComponent, CvComponent, ItemComponent, ListeComponent, DetailsComponent, HomeAccountComponent, AddAccountComponent, ItemAccountComponent, DirectComponent],
  imports: [FormsModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
