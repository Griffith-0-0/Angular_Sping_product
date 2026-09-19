import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes)
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render main navigation landmark with semantic links and update aria-current on active route', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    router.initialNavigation();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav[aria-label="Main navigation"]');
    expect(nav).toBeTruthy();

    const links = compiled.querySelectorAll('a[routerLink]');
    expect(links.length).toBe(2);

    const homeLink = compiled.querySelector('a[href="/home"]');
    const productsLink = compiled.querySelector('a[href="/products"]');

    expect(homeLink).toBeTruthy();
    expect(productsLink).toBeTruthy();

    expect(homeLink?.getAttribute('aria-current')).toBe('page');
    expect(homeLink?.classList.contains('btn-primary')).toBeTrue();

    expect(productsLink?.getAttribute('aria-current')).toBeNull();
    expect(productsLink?.classList.contains('btn-outline-primary')).toBeTrue();

    await router.navigate(['/products']);
    await fixture.whenStable();

    expect(homeLink?.getAttribute('aria-current')).toBeNull();
    expect(homeLink?.classList.contains('btn-outline-primary')).toBeTrue();

    expect(productsLink?.getAttribute('aria-current')).toBe('page');
    expect(productsLink?.classList.contains('btn-primary')).toBeTrue();
  });
});
