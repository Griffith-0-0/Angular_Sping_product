import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <div class="card mt-3 shadow-sm border-0">
      <div class="card-body">
        <h2 class="h4 card-title text-primary"><i class="bi bi-box-seam-fill me-2"></i>Our Products</h2>
        <p class="card-text text-secondary">Browse our curated selection of high-quality products built with care.</p>
      </div>
    </div>
  `,
  standalone: true
})
export class Products {}
