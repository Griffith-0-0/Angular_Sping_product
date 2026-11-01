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

  it('should render navigation links with accessibility attributes', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Main navigation');

    const links = compiled.querySelectorAll('nav a');
    expect(links.length).toBe(2);
    expect(links[0].textContent?.trim()).toBe('Home');
    expect(links[1].textContent?.trim()).toBe('Products');
  });

  it('should set active route styling and aria-current on navigation', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigate(['/home']);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const homeLink = compiled.querySelectorAll('nav a')[0] as HTMLElement;
    const productsLink = compiled.querySelectorAll('nav a')[1] as HTMLElement;

    expect(homeLink.classList.contains('btn-primary')).toBeTrue();
    expect(homeLink.getAttribute('aria-current')).toBe('page');
    expect(productsLink.classList.contains('btn-outline-primary')).toBeTrue();
    expect(productsLink.getAttribute('aria-current')).toBeNull();
  });
});
