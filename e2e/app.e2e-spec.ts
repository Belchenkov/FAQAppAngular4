import { Angular4TrPage } from './app.po';

describe('angular4-tr App', () => {
  let page: Angular4TrPage;

  beforeEach(() => {
    page = new Angular4TrPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
