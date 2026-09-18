import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  template: `
    <div class="card p-4 shadow-sm">
      <h2 class="h4 mb-2">Products</h2>
      <p class="text-muted mb-0">Discover our collection of awesome products.</p>
    </div>
  `
})
export class Products {}
