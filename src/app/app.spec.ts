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

  it('should render navigation with accessible links', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    router.initialNavigation();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav).toBeTruthy();
    expect(nav?.getAttribute('aria-label')).toBe('Main navigation');

    const links = compiled.querySelectorAll('nav a');
    expect(links.length).toBe(2);

    const homeLink = links[0] as HTMLAnchorElement;
    expect(homeLink.textContent?.trim()).toBe('Home');
    expect(homeLink.getAttribute('aria-current')).toBe('page');

    const productsLink = links[1] as HTMLAnchorElement;
    expect(productsLink.textContent?.trim()).toBe('Products');
    expect(productsLink.getAttribute('aria-current')).toBeNull();
  });
});
