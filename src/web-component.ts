import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

export const MFE3_TAG = 'sew-mfe3';

export async function registerMfe3Element(): Promise<void> {
  if (customElements.get(MFE3_TAG)) {
    return;
  }
  const app = await createApplication(appConfig);
  customElements.define(MFE3_TAG, createCustomElement(App, { injector: app.injector }));
}
