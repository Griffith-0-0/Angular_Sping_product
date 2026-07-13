import { Routes } from '@angular/router';
import { Component } from '@angular/core';

@Component({ template: '<h2>Home</h2>', standalone: true }) class Home {}
@Component({ template: '<h2>Products</h2>', standalone: true }) class Products {}

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'products', component: Products }
];
