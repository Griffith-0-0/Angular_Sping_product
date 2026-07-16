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
        provideRouter(routes),
        provideZonelessChangeDetection()
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render home content via default redirect', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    router.initialNavigation();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    // The Home component template contains 'Home' in an h1 tag.
    expect(compiled.querySelector('h1')?.textContent).toContain('Home');
    expect(compiled.querySelector('p')?.textContent).toContain('Welcome to our application!');
  });

  it('should have active class on Home link when at root', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    router.initialNavigation();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const homeLink = compiled.querySelector('a[routerLink="/home"]');
    expect(homeLink?.classList).toContain('btn-primary');
    expect(homeLink?.getAttribute('aria-current')).toBe('page');
  });
});
