import { newSpecPage } from '@stencil/core/testing';
import { MsAmbulanceWlList } from '../ms-ambulance-wl-list';

describe('ms-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MsAmbulanceWlList],
      html: `<ms-ambulance-wl-list></ms-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as MsAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);
  });
});
