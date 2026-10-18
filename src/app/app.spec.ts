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

  it('should render main navigation with aria-label and semantic links', async () => {
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
    expect(links[0].getAttribute('href')).toBe('/home');
    expect(links[1].getAttribute('href')).toBe('/products');
  });

  it('should set aria-current and active class on the active link', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    await router.navigate(['/home']);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('nav a');

    expect(links[0].classList.contains('btn-primary')).toBeTrue();
    expect(links[0].getAttribute('aria-current')).toBe('page');

    expect(links[1].classList.contains('btn-outline-primary')).toBeTrue();
    expect(links[1].getAttribute('aria-current')).toBeNull();
  });
});
