import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';  // Import SignInComponent
import { HomepageComponent } from './homepage/homepage.component';  // Import DashboardComponent
import { appRoutes } from './app.routes';  // Import routing configuration
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SignInComponent, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'SignInApp';
  // You can add logic here if needed
}
