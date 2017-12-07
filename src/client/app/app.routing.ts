import { Routes } from '@angular/router';

import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';

import { SignInComponent } from '../fw/users/sign-in/sign-in.component';
import { RegisterUserComponent } from '../fw/users/register-user/register-user.component';
import { AuthGuard } from './services/auth-guard.service';
import { AlertsComponent } from './alerts/alerts.component';
import { RecallComponent } from './recall/recall.component';
import { SearchComponent } from './search/search.component';
import { CampaignsComponent } from './campaigns/campaigns.component';

export const appRoutes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
    children: [
      { path: '', canActivateChild: [AuthGuard],
        children: [
          { path: '', redirectTo: 'alerts', pathMatch: 'full' },
          { path: 'alerts', component: AlertsComponent },
          { path: 'search', component: SearchComponent },
          { path: 'recall', component: RecallComponent },
          { path: 'campaigns', component: CampaignsComponent },
        ] }
    ] },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];
