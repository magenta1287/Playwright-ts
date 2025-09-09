import { test,expect } from '@playwright/test';
import { get } from 'http';

test('test', async ({ page }) => {
  await page.goto('https://www.marksandspencer.com/');
  await page.getByRole('button', { name: 'Reject all cookies' }).click();
    await expect(page.getByRole('link', { name: 'Women Enter Category Women' })).toBeVisible();
  await page.getByRole('link', { name: 'Women Enter Category Women' }).click()
    await page.getByRole('link', { name: 'blazers', exact: true}).click()
  await page.getByRole('button', { name: 'Regular Fit' }).click();
  
});

