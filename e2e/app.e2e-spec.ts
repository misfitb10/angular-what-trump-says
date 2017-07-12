import { AngularWhatTrumpSaysPage } from './app.po';

describe('angular-what-trump-says App', () => {
  let page: AngularWhatTrumpSaysPage;

  beforeEach(() => {
    page = new AngularWhatTrumpSaysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
