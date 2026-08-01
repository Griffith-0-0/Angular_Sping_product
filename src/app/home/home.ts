import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="card mt-3 shadow-sm border-0">
      <div class="card-body">
        <h2 class="h4 card-title text-primary"><i class="bi bi-house-door-fill me-2"></i>Welcome Home</h2>
        <p class="card-text text-secondary">Discover our amazing products and experiences designed just for you.</p>
      </div>
    </div>
  `,
  standalone: true
})
export class Home {}
