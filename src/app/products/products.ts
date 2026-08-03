import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <div class="card p-4 mt-3 shadow-sm">
      <h2 class="h4 mb-3 d-flex align-items-center">
        <i class="bi bi-box-seam me-2 text-primary" aria-hidden="true"></i>
        Products List
      </h2>
      <p class="text-secondary">This is the Products component of your new Angular application.</p>
    </div>
  `,
  standalone: true
})
export class Products {}
