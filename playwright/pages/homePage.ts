import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly listItems: Locator;
  readonly header: Locator;
  readonly buttonSearch: Locator;
  readonly fullName: Locator;
  readonly paymentDate: Locator;
  readonly inputSearch: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('#heder');
    this.listItems = page.locator('h1', { hasText: 'Installation' });
    this.buttonSearch = page.locator('button', { hasText: 'Search' });
    this.inputSearch = page.locator('#inputSearch');
    this.fullName = page.locator('#fullName');
    this.paymentDate = page.locator('#paymentDate');
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async validateSearch() {
    this.inputSearch.fill('JNJ');
    this.buttonSearch.click()
    await expect(this.fullName).toHaveText('Johnson');
  }

//   async pageObjectModel() {
//     await this.getStarted();
//     await this.pomLink.click();
//   }
}