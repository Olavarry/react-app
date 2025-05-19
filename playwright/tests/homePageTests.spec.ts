import { test, expect } from '@playwright/test';
import { HomePage} from '../pages/homePage.ts'
import { homedir } from 'os';



test('has title', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Stocks App/);
});

test('validate Search', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.validateSearch();
  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await expect(true).toBe(true)
});
