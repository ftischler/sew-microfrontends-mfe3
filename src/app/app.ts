import { Component, signal } from '@angular/core';

@Component({
  selector: 'mfe3-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mfe3');
}
