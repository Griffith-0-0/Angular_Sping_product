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

  it('should render navigation landmark with aria-label', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Main navigation');
  });

  it('should render semantic link buttons with routerLinkActive and aria-current', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    router.initialNavigation();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll<HTMLAnchorElement>('nav a');
    expect(links.length).toBe(2);

    const homeLink = links[0];
    const productsLink = links[1];

    expect(homeLink.textContent?.trim()).toBe('Home');
    expect(productsLink.textContent?.trim()).toBe('Products');

    expect(homeLink.classList.contains('btn-primary')).toBeTrue();
    expect(homeLink.getAttribute('aria-current')).toBe('page');

    expect(productsLink.classList.contains('btn-outline-primary')).toBeTrue();
    expect(productsLink.getAttribute('aria-current')).toBeNull();
  });
});
