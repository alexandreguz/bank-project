import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AccountComponent } from './pages/account/account.component';
import { OptionsComponent } from './pages/options/options.component';

export const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: '', component: LandingPageComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];
