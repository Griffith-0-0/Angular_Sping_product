import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
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

  it('should render navigation links with aria-label and correct active route state', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    router.initialNavigation();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Main navigation');

    const homeLink = compiled.querySelector('a[href="/home"]');
    expect(homeLink).toBeTruthy();
    expect(homeLink?.getAttribute('aria-current')).toBe('page');
    expect(homeLink?.classList.contains('btn-primary')).toBeTrue();

    const productsLink = compiled.querySelector('a[href="/products"]');
    expect(productsLink).toBeTruthy();
    expect(productsLink?.getAttribute('aria-current')).toBeNull();
    expect(productsLink?.classList.contains('btn-outline-primary')).toBeTrue();
  });
});
