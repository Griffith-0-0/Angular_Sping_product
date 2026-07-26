import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="card p-4 mt-3 shadow-sm border-0 bg-light">
      <h2>Welcome to tpAng1!</h2>
      <p class="text-muted">An elegant Angular application crafted with style and accessibility.</p>
    </div>
  `,
  standalone: true
})
export class Home {}
