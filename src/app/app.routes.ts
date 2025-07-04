import { Routes } from '@angular/router';
import { Login } from './components/domain/login/login';
import { Dashboard } from './components/domain/dashboard/dashboard';

export const routes: Routes = [
//   { path: '', component: Login },
  { path: '', component: Dashboard },
  { path: 'dashboard', component: Dashboard },
  { path: 'logout', component: Login },
];
