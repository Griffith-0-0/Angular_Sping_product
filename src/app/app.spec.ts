import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
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

  it('should render title', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, tpAng1');
  });

  it('should redirect to home and display Home Page', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    router.initialNavigation();
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(router.url).toBe('/home');
    expect(compiled.querySelector('main')?.textContent).toContain('Home Page');
  });

  it('should navigate to products and display Products Page', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);

    router.initialNavigation();
    await fixture.whenStable();

    await router.navigate(['/products']);
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(router.url).toBe('/products');
    expect(compiled.querySelector('main')?.textContent).toContain('Products Page');
  });
});
