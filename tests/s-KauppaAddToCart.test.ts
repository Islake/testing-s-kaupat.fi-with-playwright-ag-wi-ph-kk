import { test, expect } from '@playwright/test';

test('Add item to cart', async ({ page }) => {
  // Navigate to the product page
  await page.goto('https://www.s-kaupat.fi/tuote/motorola-itkuhalytin-vm481/5055374710081');

  // Accept cookies
  await page.click('button[data-testid="uc-accept-all-button"]');

  // Choose delivery options
  await page.click('button:has-text("Valitse toimitustapa")');

  // Enter the address into the search bar
  await page.fill('input[id="address-search-input"]', 'Myllypurontie 1, 00920 Helsinki');

  // Press Enter to search for the address
  await page.keyboard.press('Enter');

  // Wait for the address options to appear and ensure the correct address is displayed
  await page.waitForSelector('.address-title[data-address-title="Myllypurontie 1"]');
  
  // Assert that the correct address is shown
  const addressElement = await page.$('.address-title[data-address-title="Myllypurontie 1"]');
  expect(addressElement).toBeTruthy(); // Assert that the address element exists

  // Click the address once it's available
  await page.click('span.address-title[data-address-title="Myllypurontie 1"]');

  // Wait for the delivery option to appear (e.g., Kotiinkuljetus)
  await page.waitForSelector('span:has-text("Kotiinkuljetus")');
  
  // Assert that the "Kotiinkuljetus" option is available
  const deliveryOption = await page.$('span:has-text("Kotiinkuljetus")');
  expect(deliveryOption).toBeTruthy(); // Assert that the delivery option is visible

  // Select the "Kotiinkuljetus" option by clicking on the corresponding text
  await page.click('span:has-text("Kotiinkuljetus")');

  // Wait for the "Valitse" button to appear after selecting the delivery method
  await page.waitForSelector('button[data-test-id="method-confirm"]');

  // Click the "Valitse" button to confirm the delivery option
  await page.click('button[data-test-id="method-confirm"]');

  // Skip the login by clicking the "Ohita" button
  await page.waitForSelector('button[data-test-id="skip-login"]');
  await page.click('button[data-test-id="skip-login"]');

  // Wait for the time slots to load (e.g., 14:00-16:00)
  await page.waitForSelector('div[data-test-id="time-slot"]');
  
  // Assert that at least one time slot is available
  const timeSlot = await page.$('div[data-test-id="time-slot"]:first-child');
  expect(timeSlot).toBeTruthy(); // Assert that a time slot is visible

  // Choose the first available time slot (e.g., 14:00-16:00)
  await page.click('div[data-test-id="time-slot"]:first-child input[type="radio"]');

  // Wait for the "Valitse aika" button to appear after selecting the time slot
  await page.waitForSelector('button[data-test-id="btn-select-slot"]');

  // Click the "Valitse aika" button to confirm the time slot selection
  await page.click('button[data-test-id="btn-select-slot"]');

  // Wait for the banner to appear and skip it
  await page.waitForSelector('button[data-test-id="skip"]');
  await page.click('button[data-test-id="skip"]');

  // Wait for the "+" button to add the item to the cart
  await page.waitForSelector('button[data-test-id="quantity-modifier__add"]');

  // Assert that the "+" button is present and clickable
  const addButton = await page.$('button[data-test-id="quantity-modifier__add"]');
  expect(addButton).toBeTruthy(); // Assert that the button exists

  // Click the "+" button to add the item to the cart
  await page.click('button[data-test-id="quantity-modifier__add"]');
});
