import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  template: `
    <div class="mt-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="h4 mb-0">Our Premium Products</h2>
        <span class="badge bg-secondary px-3 py-2 rounded-pill">Total: {{ products().length }}</span>
      </div>

      <div class="row g-3">
        @for (product of products(); track product.id) {
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm border-light">
              <div class="card-body d-flex flex-column">
                <span class="badge bg-light text-primary border border-primary-subtle align-self-start mb-2 small">{{ product.category }}</span>
                <h3 class="card-title h5 mb-2">{{ product.name }}</h3>
                <p class="card-text text-muted flex-grow-1 small mb-3">{{ product.description }}</p>
                <div class="d-flex justify-content-between align-items-center mt-auto pt-2 border-top border-light">
                  <span class="fs-5 fw-bold text-dark">{{ product.price | currency:'USD':'symbol':'1.2-2' }}</span>
                  <button
                    class="btn btn-sm btn-primary d-flex align-items-center gap-1"
                    [attr.aria-label]="'Purchase ' + product.name"
                    (click)="buyProduct(product)">
                    <i class="bi bi-cart-plus-fill" aria-hidden="true"></i> Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  standalone: true
})
export class Products {
  protected products = signal<Product[]>([
    { id: 1, name: 'Eco-Friendly Bottle', price: 24.99, category: 'Lifestyle', description: 'Double-walled stainless steel water bottle that keeps your drinks cold for 24 hours.' },
    { id: 2, name: 'Wireless Ergonomic Mouse', price: 49.99, category: 'Electronics', description: 'Reduce wrist strain with this vertical, high-precision wireless mouse.' },
    { id: 3, name: 'Organic Bamboo Sheets', price: 89.99, category: 'Home', description: 'Silky-smooth, hypoallergenic sheets made from 100% sustainable organic bamboo.' },
    { id: 4, name: 'Minimalist Leather Wallet', price: 34.99, category: 'Accessories', description: 'RFID-blocking slim cardholder crafted from premium full-grain leather.' }
  ]);

  protected buyProduct(product: Product) {
    alert(`Thank you for purchasing the ${product.name}!`);
  }
}
