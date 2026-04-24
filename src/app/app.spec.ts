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

  it('should render navigation with correct ARIA labels', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav).toBeTruthy();
    expect(nav?.getAttribute('aria-label')).toBe('Main Navigation');

    const homeLink = compiled.querySelector('a[routerLink="/home"]');
    expect(homeLink?.getAttribute('aria-label')).toBe('Home page');

    const productsLink = compiled.querySelector('a[routerLink="/products"]');
    expect(productsLink?.getAttribute('aria-label')).toBe('Products page');
  });

  it('should render home content by default via redirect', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    // Trigger initial navigation
    await router.navigate(['/']);
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Home');
  });
});
