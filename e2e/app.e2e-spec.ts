import { SharingDataPage } from './app.po';

describe('sharing-data App', () => {
  let page: SharingDataPage;

  beforeEach(() => {
    page = new SharingDataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
