import { test, expect } from '@playwright/test';

test('User can log in', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'secret');
  await page.click('#login-btn');
  await expect(page).toHaveURL(/login-success/);
  await expect(page.locator('h1')).toHaveText('Welcome!');
});
