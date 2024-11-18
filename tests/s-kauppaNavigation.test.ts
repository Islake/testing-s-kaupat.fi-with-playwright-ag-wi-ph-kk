import {test, expect} from "@playwright/test";
import {addExtra} from "playwright-extra";

test("Navigate to the S-kauppa homepage", async ({page}) => {
    // Navigate to the S-kauppa homepage
    await page.goto("https://www.s-kaupat.fi/");

    await expect(page).toHaveTitle('S-kaupat - tuttu ruokakauppasi verkossa');
    console.log("Page Loaded Successfully");

    await page.click('button[data-testid="uc-accept-all-button"]');

    const tuotteetButton = page.locator('[data-test-id="local-nav-products-container"]');
    await tuotteetButton.click();

    const tuotteetDropdown = page.locator('[data-test-id="product-navigation"]');
    expect(await tuotteetDropdown.isVisible()).toBeTruthy();

    await page.click('a:has-text("Lapset")');
    expect(await page.url()).toBe("https://www.s-kaupat.fi/tuotteet/lapset-1");

    await page.click('a:has-text("lastentarvikkeet")');
    expect(await page.url()).toBe("https://www.s-kaupat.fi/tuotteet/lapset-1/lastentarvikkeet");

});