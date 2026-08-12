import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes),
        provideHttpClient()
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, tpAng1');
  });

  it('should toggle navigation button classes and aria-current on active routes', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    router.initialNavigation();

    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const homeBtn = compiled.querySelector('a[routerLink="/home"]') as HTMLAnchorElement;
    const productsBtn = compiled.querySelector('a[routerLink="/products"]') as HTMLAnchorElement;

    expect(homeBtn).toBeTruthy();
    expect(productsBtn).toBeTruthy();

    // Navigate to products and verify
    await router.navigate(['/products']);
    await fixture.whenStable();
    fixture.detectChanges();

    expect(productsBtn.classList.contains('btn-primary')).toBeTrue();
    expect(productsBtn.classList.contains('btn-outline-primary')).toBeFalse();
    expect(productsBtn.getAttribute('aria-current')).toBe('page');

    expect(homeBtn.classList.contains('btn-primary')).toBeFalse();
    expect(homeBtn.classList.contains('btn-outline-primary')).toBeTrue();
    expect(homeBtn.getAttribute('aria-current')).toBeNull();

    // Navigate back to home and verify
    await router.navigate(['/home']);
    await fixture.whenStable();
    fixture.detectChanges();

    expect(homeBtn.classList.contains('btn-primary')).toBeTrue();
    expect(homeBtn.classList.contains('btn-outline-primary')).toBeFalse();
    expect(homeBtn.getAttribute('aria-current')).toBe('page');

    expect(productsBtn.classList.contains('btn-primary')).toBeFalse();
    expect(productsBtn.classList.contains('btn-outline-primary')).toBeTrue();
    expect(productsBtn.getAttribute('aria-current')).toBeNull();
  });
});
