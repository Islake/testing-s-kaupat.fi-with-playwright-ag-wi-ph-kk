import {test } from '@playwright/test';

test('Find product page', async ({ page }) => {

    // Navigate to the s-kaupat page
    await page.goto('https://www.s-kaupat.fi/');

    // Accept cookies
    await page.click('button[data-testid="uc-accept-all-button"]');

    // a linkki
    await page.waitForSelector('a:has-text("Tuotteet")');
    await page.click('a:has-text("Tuotteet")');

    // Click the "Lapset" link
    await page.waitForSelector('a:has-text("Lapset")');
    await page.click('a:has-text("Lapset")');

    // Click the "Lastentarvikkeet" link
    await page.waitForSelector('a:has-text("Lastentarvikkeet")');
    await page.click('a:has-text("Lastentarvikkeet")');

    // Click the "Favorite" button
    await page.waitForSelector('button[data-test-id="favorite-button"]');
    await page.click('button[data-test-id="favorite-button"]');

});
