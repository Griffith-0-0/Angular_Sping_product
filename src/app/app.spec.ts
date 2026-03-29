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

  it('should render navigation with ARIA labels and icons', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const nav = compiled.querySelector('nav');
    expect(nav).toBeTruthy();
    expect(nav?.getAttribute('aria-label')).toBe('Main Navigation');

    const links = compiled.querySelectorAll('a.btn');
    expect(links.length).toBe(2);

    expect(links[0].getAttribute('aria-label')).toBe('Home page');
    expect(links[0].querySelector('i.bi-house-door')).toBeTruthy();

    expect(links[1].getAttribute('aria-label')).toBe('Products page');
    expect(links[1].querySelector('i.bi-box-seam')).toBeTruthy();
  });

  it('should have active class on the current route', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    // Initial navigation to handle redirects
    router.initialNavigation();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const homeLink = compiled.querySelector('a[routerLink="/home"]');
    expect(homeLink?.classList).toContain('active');

    await router.navigate(['/products']);
    await fixture.whenStable();
    fixture.detectChanges();

    const productsLink = compiled.querySelector('a[routerLink="/products"]');
    expect(productsLink?.classList).toContain('active');
    expect(homeLink?.classList).not.toContain('active');
  });
});
