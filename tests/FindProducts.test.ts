import {test, expect } from '@playwright/test';

test('Add item to cart', async ({ page }) => {

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

    try {
        await page.waitForSelector('#main-content > div > div.sc-8b96d656-1.dxFlr > div.sc-2f47f5ac-2.btIVHZ > div > div:nth-child(2) > article > div.sc-ddb02d9f-0.dHHZyS > a > span');
        const product1 = await page.innerText('#main-content > div > div.sc-8b96d656-1.dxFlr > div.sc-2f47f5ac-2.btIVHZ > div > div:nth-child(2) > article > div.sc-ddb02d9f-0.dHHZyS > a > span');
        console.log("Produc name: " + product1);
    } catch (error) {
        console.error('Error fetching the innerText:', error);
    }

    console.log('Test completed successfully!');


});
