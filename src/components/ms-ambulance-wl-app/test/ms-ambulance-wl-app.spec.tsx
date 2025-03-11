import { newSpecPage } from '@stencil/core/testing';
import { MsAmbulanceWlApp } from '../ms-ambulance-wl-app';

describe('ms-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [MsAmbulanceWlApp],
      html: `<ms-ambulance-wl-app base-path="/"></ms-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("ms-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [MsAmbulanceWlApp],
      html: `<ms-ambulance-wl-app base-path="/ambulance-wl/"></ms-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("ms-ambulance-wl-list");
  });
});
