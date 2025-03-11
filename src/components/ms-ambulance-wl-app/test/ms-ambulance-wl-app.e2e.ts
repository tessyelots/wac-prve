import { newE2EPage } from '@stencil/core/testing';

describe('ms-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ms-ambulance-wl-app></ms-ambulance-wl-app>');

    const element = await page.find('ms-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
