import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlertmeModule } from 'alertme-component-angular';

import { AppComponent } from './app.component';


import { FwModule } from '../fw/fw.module';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { SignInComponent } from '../fw/users/sign-in/sign-in.component';
import { RegisterUserComponent } from '../fw/users/register-user/register-user.component';
import { AuthGuard } from './services/auth-guard.service';
import { appRoutes } from './app.routing';
import { UserService } from './services/user.service';
import { UserApi } from '../fw/users/user-api';
import { AlertsComponent } from './alerts/alerts.component';
import { SearchComponent } from './search/search.component';
import { RecallComponent } from './recall/recall.component';
import { CampaignsComponent } from './campaigns/campaigns.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedUserComponent,
    AlertsComponent,
    SearchComponent,
    RecallComponent,
    CampaignsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FwModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AlertmeModule
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
