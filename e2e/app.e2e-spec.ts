import { SongSelectorPage } from './app.po';

describe('song-selector App', () => {
  let page: SongSelectorPage;

  beforeEach(() => {
    page = new SongSelectorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
