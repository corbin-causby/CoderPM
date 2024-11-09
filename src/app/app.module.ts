import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';  // Optional HttpClient setup
import { AppComponent } from './app.component';  // Import standalone component

@NgModule({
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]  // Directly bootstrap the standalone component
})
export class AppModule {}