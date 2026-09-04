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

  it('should render skip-to-content link', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const skipLink = compiled.querySelector('a[href="#main"]');
    expect(skipLink).toBeTruthy();
    expect(skipLink?.textContent).toContain('Skip to main content');
  });

  it('should render navigation links as semantic anchors with aria-current on active route', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.initialNavigation();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const homeLink = compiled.querySelector('a[routerLink="/home"]');
    const productsLink = compiled.querySelector('a[routerLink="/products"]');

    expect(homeLink).toBeTruthy();
    expect(productsLink).toBeTruthy();
    expect(homeLink?.getAttribute('aria-current')).toBe('page');
    expect(productsLink?.getAttribute('aria-current')).toBeNull();
  });
});
