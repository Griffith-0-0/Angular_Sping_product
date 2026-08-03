import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="card p-4 mt-3 shadow-sm">
      <h2 class="h4 mb-3 d-flex align-items-center">
        <i class="bi bi-house-door me-2 text-primary" aria-hidden="true"></i>
        Welcome to tpAng1
      </h2>
      <p class="text-secondary">This is the Home component of your new Angular application.</p>
    </div>
  `,
  standalone: true
})
export class Home {}
