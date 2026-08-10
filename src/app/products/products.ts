import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Products</h2>
      <div class="row">
        <div class="col-md-4 mb-3" *ngFor="let p of products">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ p.name }}</h5>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <span class="h5 mb-0 text-primary fw-bold">\${{ p.price }}</span>
                <button class="btn" [ngClass]="addedId() === p.id ? 'btn-success' : 'btn-primary'"
                  (click)="add(p.id)" [attr.aria-label]="addedId() === p.id ? 'Added' : 'Add to cart'">
                  {{ addedId() === p.id ? 'Added! ✓' : 'Add to Cart' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class Products {
  products = [{id:1, name:'Product A', price:10}, {id:2, name:'Product B', price:20}];
  addedId = signal<number|null>(null);
  add(id: number) {
    this.addedId.set(id);
    setTimeout(() => this.addedId.set(null), 2000);
  }
}
