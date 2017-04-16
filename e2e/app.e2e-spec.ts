import { MasterDetailViewPage } from './app.po';

describe('master-detail-view App', () => {
  let page: MasterDetailViewPage;

  beforeEach(() => {
    page = new MasterDetailViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
