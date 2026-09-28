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

  it('should render navigation links with accessibility attributes', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    router.initialNavigation();
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Main navigation');

    const homeLink = compiled.querySelector('a[routerLink="/home"]');
    expect(homeLink).toBeTruthy();
    expect(homeLink?.getAttribute('aria-current')).toBe('page');

    const productsLink = compiled.querySelector('a[routerLink="/products"]');
    expect(productsLink).toBeTruthy();
    expect(productsLink?.getAttribute('aria-current')).toBeNull();
  });
});
