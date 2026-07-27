import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="py-4">
      <h1 class="h2 mb-3">Welcome to Home</h1>
      <p class="lead">This is the application home page.</p>
    </div>
  `,
  standalone: true
})
export class Home {}
