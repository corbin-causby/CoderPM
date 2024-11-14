import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule for ngIf, ngClass, etc.

@Component({
  selector: 'app-homepage',  // Selector to use this component in HTML
  standalone: true,  // This marks the component as standalone
  imports: [CommonModule],  // Import CommonModule for common Angular directives like ngIf
  templateUrl: './homepage.component.html',  // Path to the HTML template
  styleUrls: ['./homepage.component.css'],  // Path to the CSS file for this component
  encapsulation: ViewEncapsulation.None,
})
export class HomepageComponent {

  constructor(private router: Router) { }

  // Method to handle user logout and navigate back to the sign-in page
  onLogout(): void {
    // For now, just redirect to the sign-in page
    this.router.navigate(['/']);  // Navigate to the root route, which displays the sign-in page
  }
}

