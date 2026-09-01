import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
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

  it('should render main navigation with aria-label', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav).toBeTruthy();
    expect(nav?.getAttribute('aria-label')).toBe('Main navigation');
  });

  it('should apply aria-current="page" to active navigation link', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    router.initialNavigation();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const activeLink = compiled.querySelector('a[aria-current="page"]');
    expect(activeLink).toBeTruthy();
    expect(activeLink?.textContent?.trim()).toBe('Home');
  });
});
