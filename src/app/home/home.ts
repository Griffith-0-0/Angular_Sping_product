import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container mt-4">
      <div class="p-5 mb-4 bg-light rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Welcome to Palette Store!</h1>
          <p class="col-md-8 fs-4">This is a simple UI to demonstrate micro-UX improvements.</p>
          <hr class="my-4">
          <p>Explore our products and see how we care about details.</p>
          <a class="btn btn-primary btn-lg" routerLink="/products" role="button">View Products</a>
        </div>
      </div>
    </div>
  `,
  imports: [RouterLink]
})
export class Home {}
