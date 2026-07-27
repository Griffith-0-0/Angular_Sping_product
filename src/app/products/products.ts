import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <div class="py-4">
      <h1 class="h2 mb-3">Our Products</h1>
      <p class="lead">Explore our selection of quality products.</p>
    </div>
  `,
  standalone: true
})
export class Products {}
