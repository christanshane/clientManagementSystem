import { ClientManagementSystemPage } from './app.po';

describe('client-management-system App', () => {
  let page: ClientManagementSystemPage;

  beforeEach(() => {
    page = new ClientManagementSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
