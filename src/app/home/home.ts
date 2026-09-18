import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="card p-4 shadow-sm">
      <h2 class="h4 mb-2">Welcome Home</h2>
      <p class="text-muted mb-0">Explore our products and services using the navigation links above.</p>
    </div>
  `
})
export class Home {}
