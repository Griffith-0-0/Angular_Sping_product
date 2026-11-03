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
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.initialNavigation();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Main navigation');

    const links = compiled.querySelectorAll('a.btn');
    expect(links.length).toBe(2);

    // Initial navigation redirects to /home
    const homeLink = links[0];
    const productsLink = links[1];
    expect(homeLink.textContent?.trim()).toBe('Home');
    expect(productsLink.textContent?.trim()).toBe('Products');
    expect(homeLink.classList.contains('btn-primary')).toBeTrue();
    expect(homeLink.getAttribute('aria-current')).toBe('page');
    expect(productsLink.classList.contains('btn-outline-primary')).toBeTrue();
    expect(productsLink.getAttribute('aria-current')).toBeNull();
  });

  it('should update active class and aria-current on navigation', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    await router.initialNavigation();
    await fixture.whenStable();

    await router.navigate(['/products']);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a.btn');
    const homeLink = links[0];
    const productsLink = links[1];

    expect(productsLink.classList.contains('btn-primary')).toBeTrue();
    expect(productsLink.getAttribute('aria-current')).toBe('page');
    expect(homeLink.classList.contains('btn-outline-primary')).toBeTrue();
    expect(homeLink.getAttribute('aria-current')).toBeNull();
  });
});
