import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  let fixture: ComponentFixture<App>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter(routes)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    router = TestBed.inject(Router);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render main navigation landmark with accessible label', async () => {
    router.initialNavigation();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav).toBeTruthy();
    expect(nav?.getAttribute('aria-label')).toBe('Main navigation');
  });

  it('should render navigation links and update aria-current on active route', async () => {
    router.initialNavigation();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a[routerLink]');
    expect(links.length).toBe(2);

    const homeLink = compiled.querySelector('a[routerLink="/home"]');
    expect(homeLink?.getAttribute('aria-current')).toBe('page');
    expect(homeLink?.classList).toContain('btn-primary');

    const productsLink = compiled.querySelector('a[routerLink="/products"]');
    expect(productsLink?.getAttribute('aria-current')).toBeNull();
    expect(productsLink?.classList).toContain('btn-outline-primary');
  });

  it('should render main content landmark', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const main = compiled.querySelector('main#main');
    expect(main).toBeTruthy();
  });
});
