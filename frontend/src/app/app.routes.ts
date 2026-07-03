import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MainlayoutComponent } from './features/layout/mainlayout/mainlayout.component';

import { AllinvitesComponent } from './features/invite/allinvites/allinvites.component';
import { MyProfileComponent } from './features/my-profile/my-profile.component';
import { ChangePasswordComponent } from './features/change-password/change-password.component';
import { ReferralListComponent } from './features/referral-list/referral-list.component';
import { RewardPointsComponent } from './features/reward-points/reward-points.component';

export const routes: Routes = [

  // Default Route
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // Authentication Routes
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  // Main Layout Routes
  {
    path: '',
    component: MainlayoutComponent,
    children: [

      {
        path: 'dashboard',
        component: DashboardComponent
      },

      {
        path: 'invite',
        component: AllinvitesComponent
      },

      {
        path: 'my-profile',
        component: MyProfileComponent
      },

      {
        path: 'change-password',
        component: ChangePasswordComponent
      },

      {
        path: 'referrals',
        component: ReferralListComponent
      },

      {
        path: 'rewards',
        component: RewardPointsComponent
      }

    ]
  },

  // Invalid Route
  {
    path: '**',
    redirectTo: 'login'
  }

];