import { newE2EPage } from '@stencil/core/testing';

describe('ms-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ms-ambulance-wl-editor></ms-ambulance-wl-editor>');

    const element = await page.find('ms-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
