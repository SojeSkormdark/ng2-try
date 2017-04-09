import { Ng2TryPage } from './app.po';

describe('ng2-try App', function() {
  let page: Ng2TryPage;

  beforeEach(() => {
    page = new Ng2TryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
