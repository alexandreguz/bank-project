import { Routes } from '@angular/router';
// import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AccountComponent } from './pages/account/account.component';
import { TransactionComponent } from './pages/transaction/transaction.component';
import { OptionsComponent } from './pages/options/options.component';

export const routes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '', component: LandingPageComponent },
//   { path: 'options', component: TransactionComponent },
  { path: 'options', component: OptionsComponent },

  { path: '**', redirectTo: '' }
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: '', redirectTo: '/login', pathMatch: 'full' }
//   { path: 'login', component: LoginComponent },
];
