import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomepageComponent } from './homepage/homepage.component';

export const appRoutes: Routes = [
  { path: '', component: SignInComponent }, // Default route, sign-in page
  { path: 'homepage', component: HomepageComponent }, // Route for dashboard
  // Other routes can go here
];
