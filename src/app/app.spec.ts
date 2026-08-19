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

  it('should render main navigation landmark with accessible label', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Main navigation');
  });

  it('should set active route attributes on current link', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    router.initialNavigation();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const homeLink = compiled.querySelector('a[href="/home"]');
    expect(homeLink?.getAttribute('aria-current')).toBe('page');
    expect(homeLink?.classList.contains('btn-primary')).toBeTrue();
  });
});
