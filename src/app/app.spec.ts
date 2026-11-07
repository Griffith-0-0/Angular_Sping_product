import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection(), provideRouter(routes)]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render navigation with accessible links', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.initialNavigation();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav[aria-label="Main navigation"]');
    expect(nav).toBeTruthy();

    const homeLink = compiled.querySelector('a[routerLink="/home"]');
    const productsLink = compiled.querySelector('a[routerLink="/products"]');
    expect(homeLink).toBeTruthy();
    expect(productsLink).toBeTruthy();
    expect(homeLink?.getAttribute('aria-current')).toBe('page');
    expect(homeLink?.classList.contains('btn-primary')).toBeTrue();
  });
});
