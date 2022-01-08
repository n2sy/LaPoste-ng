import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { CustomDirDirective } from './custom-dir.directive';
import { ShortPipe } from './short.pipe';
import { FilterPipe } from './filter.pipe';
import { FirstService } from './services/first.service';
import { RecrueComponent } from './recrue/recrue.component';
import { HomeComponent } from './home/home.component';
import { POSTE_ROUTING } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { InfosComponent } from './infos/infos.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubModule } from './sub/sub.module';
import { LoginComponent } from './login/login.component';
import { NoImagePipe } from './no-image.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestComponent } from './http-test/http-test.component';
import { ExpObservableComponent } from './exp-observable/exp-observable.component';
import { login_interceptor } from './token-inter.interceptor';
import { ReactFormComponent } from './react-form/react-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FilsComponent,
    CvComponent,
    ItemComponent,
    ListeComponent,
    DetailsComponent,
    HomeAccountComponent,
    AddAccountComponent,
    ItemAccountComponent,
    DirectComponent,
    MsWordComponent,
    ManageServersComponent,
    CustomDirDirective,
    ShortPipe,
    FilterPipe,
    RecrueComponent,
    HomeComponent,
    NavbarComponent,
    InfosComponent,
    EditComponent,
    AddComponent,
    NotFoundComponent,
    LoginComponent,
    NoImagePipe,
    HttpTestComponent,
    ExpObservableComponent,
    ReactFormComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    POSTE_ROUTING,
    SubModule,
    HttpClientModule,
  ],
  providers: [FirstService, login_interceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
