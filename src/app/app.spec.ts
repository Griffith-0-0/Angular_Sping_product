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

  it('should have accessible navigation landmark', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav[aria-label="Main navigation"]');
    expect(nav).toBeTruthy();
  });

  it('should activate home route and set aria-current="page"', async () => {
    const router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    await router.navigate(['/home']);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('nav a');
    const homeLink = links[0] as HTMLElement;
    const prodLink = links[1] as HTMLElement;

    expect(homeLink.getAttribute('aria-current')).toBe('page');
    expect(homeLink.classList).toContain('btn-primary');
    expect(prodLink.getAttribute('aria-current')).toBeNull();
    expect(prodLink.classList).toContain('btn-outline-primary');
  });
});
