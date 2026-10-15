import { Component, input, output, VERSION, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mfe3-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class App {
  readonly path = input('');
  readonly navigate = output<string>({ alias: 'mfe3-navigate' });

  protected readonly angularVersion = VERSION.full;
}
