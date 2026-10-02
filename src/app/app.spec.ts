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

  it('should render main navigation with aria-label and semantic links', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    router.initialNavigation();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Main navigation');

    const links = compiled.querySelectorAll('nav a');
    expect(links.length).toBe(2);

    const homeLink = links[0];
    expect(homeLink.getAttribute('aria-current')).toBe('page');
    expect(homeLink.classList.contains('btn-primary')).toBeTrue();
  });

  it('should update aria-current attribute when navigating to products', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    router.initialNavigation();
    await fixture.whenStable();

    await router.navigate(['/products']);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('nav a');
    const homeLink = links[0];
    const productsLink = links[1];

    expect(homeLink.getAttribute('aria-current')).toBeNull();
    expect(productsLink.getAttribute('aria-current')).toBe('page');
    expect(productsLink.classList.contains('btn-primary')).toBeTrue();
  });
});
