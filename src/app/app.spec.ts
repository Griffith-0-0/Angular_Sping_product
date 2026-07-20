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

  it('should render skip to content link, main, and nav landmarks', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const skipLink = compiled.querySelector('.skip-link');
    expect(skipLink).toBeTruthy();
    expect(skipLink?.getAttribute('href')).toBe('#main');

    const nav = compiled.querySelector('nav');
    expect(nav).toBeTruthy();
    expect(nav?.getAttribute('aria-label')).toBe('Main navigation');

    const main = compiled.querySelector('main');
    expect(main).toBeTruthy();
    expect(main?.getAttribute('id')).toBe('main');
  });

  it('should set aria-current and correct active class on Home by default', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    router.initialNavigation();

    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a.btn');
    expect(links.length).toBe(2);

    const homeLink = links[0];
    const productsLink = links[1];

    expect(homeLink.textContent?.trim()).toBe('Home');
    expect(homeLink.classList.contains('btn-primary')).toBeTrue();
    expect(homeLink.getAttribute('aria-current')).toBe('page');

    expect(productsLink.textContent?.trim()).toBe('Products');
    expect(productsLink.classList.contains('btn-outline-primary')).toBeTrue();
    expect(productsLink.getAttribute('aria-current')).toBeNull();
  });
});
