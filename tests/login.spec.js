import { test, expect } from '@playwright/test';

test('Should fail to login with wrong credentials', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  
  // Intentionally enter wrong user data
  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpassword');
  await page.click('#login-btn');

  // Wrong expectation: we're expecting successful login, but it won't happen
  await expect(page).toHaveURL(/login-success/); // This will FAIL
  //await expect(page.locator('h1')).toHaveText('Welcome!');

});
