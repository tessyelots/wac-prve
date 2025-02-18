import { newSpecPage } from '@stencil/core/testing';
import { MsAmbulanceWlList } from '../ms-ambulance-wl-list';

describe('ms-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MsAmbulanceWlList],
      html: `<ms-ambulance-wl-list></ms-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <ms-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ms-ambulance-wl-list>
    `);
  });
});
