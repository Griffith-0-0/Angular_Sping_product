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

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, tpAng1');
  });

  it('should apply btn-primary to active link', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    router.initialNavigation();

    await router.navigate(['/home']);
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const homeLink = compiled.querySelector('a[routerLink="/home"]');
    const productsLink = compiled.querySelector('a[routerLink="/products"]');

    expect(homeLink?.classList).toContain('btn-primary');
    expect(productsLink?.classList).toContain('btn-outline-primary');

    await router.navigate(['/products']);
    await fixture.whenStable();
    fixture.detectChanges();

    expect(productsLink?.classList).toContain('btn-primary');
    expect(homeLink?.classList).toContain('btn-outline-primary');
  });
});
