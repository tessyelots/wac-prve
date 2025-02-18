import { newE2EPage } from '@stencil/core/testing';

describe('ms-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ms-ambulance-wl-list></ms-ambulance-wl-list>');

    const element = await page.find('ms-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
