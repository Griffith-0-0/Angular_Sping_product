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

  it('should render skip to main content link', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const skipLink = compiled.querySelector('a.visually-hidden-focusable');
    expect(skipLink).toBeTruthy();
    expect(skipLink?.textContent).toContain('Skip to Main Content');
  });

  it('should render semantic main landmark and header with proper classes', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const mainLandmark = compiled.querySelector('main#main');
    expect(mainLandmark).toBeTruthy();
    expect(mainLandmark?.getAttribute('tabindex')).toBe('-1');

    const header = compiled.querySelector('header');
    expect(header).toBeTruthy();
    expect(header?.classList.contains('mb-4')).toBeTrue();
  });

  it('should navigate and apply active class', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    router.initialNavigation();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const activeLink = compiled.querySelector('.btn-primary');
    expect(activeLink).toBeTruthy();
    expect(activeLink?.textContent?.trim()).toBe('Home');
    expect(activeLink?.getAttribute('aria-current')).toBe('page');
  });
});
