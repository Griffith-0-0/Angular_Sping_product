import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection(), provideRouter(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    router = TestBed.inject(Router);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render main navigation landmark and navigation links', async () => {
    router.initialNavigation();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav[aria-label="Main navigation"]');
    expect(nav).toBeTruthy();

    const links = compiled.querySelectorAll('a[routerLink]');
    expect(links.length).toBe(2);
    expect(links[0].textContent?.trim()).toBe('Home');
    expect(links[1].textContent?.trim()).toBe('Products');
  });

  it('should set aria-current="page" on active link', async () => {
    router.initialNavigation();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const homeLink = compiled.querySelector('a[routerLink="/home"]');
    const productsLink = compiled.querySelector('a[routerLink="/products"]');

    expect(homeLink?.getAttribute('aria-current')).toBe('page');
    expect(productsLink?.getAttribute('aria-current')).toBeNull();

    await router.navigate(['/products']);
    await fixture.whenStable();

    expect(homeLink?.getAttribute('aria-current')).toBeNull();
    expect(productsLink?.getAttribute('aria-current')).toBe('page');
  });
});
