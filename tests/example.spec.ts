import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login.page';

test('username correct et pass correct', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage:LoginPage= new LoginPage(page);
  await loginPage.saisirUsername('standard_user');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clicSurLogin();
  await expect(page.url()).toBe('https://www.saucedemo.com/inventory.html'); 
  
});

test('username incorrect et pass correct', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const loginPage:LoginPage= new LoginPage(page);
  await loginPage.saisirUsername('standard_user_incorrect');
  await loginPage.saisirPassword('secret_sauce');
  await loginPage.clicSurLogin();
  await expect( await loginPage.getErrorMessage()).toBeVisible();

  
});