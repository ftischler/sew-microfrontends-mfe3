import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  function render(path: string) {
    const fixture = TestBed.createComponent(App);
    fixture.componentRef.setInput('path', path);
    fixture.detectChanges();
    return fixture;
  }

  function root(fixture: ReturnType<typeof render>): ShadowRoot {
    return (fixture.nativeElement as HTMLElement).shadowRoot as ShadowRoot;
  }

  it('should render the overview for an empty path', () => {
    const fixture = render('');
    expect(root(fixture).querySelector('p')?.textContent).toContain('Overview page');
  });

  it('should render the details for the details path', () => {
    const fixture = render('details');
    expect(root(fixture).querySelector('p')?.textContent).toContain('Details page');
  });

  it('should ask the host to navigate instead of navigating itself', () => {
    const fixture = render('');
    const requested: string[] = [];
    fixture.componentInstance.navigate.subscribe((path) => requested.push(path));
    root(fixture).querySelector('button')?.click();
    expect(requested).toEqual(['details']);
  });
});
