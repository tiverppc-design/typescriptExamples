import {test} from '@playwright/test';

test('open and close app', async ({page}) => {
  await page.goto('http://google.com');
  await page.waitForTimeout(5000);
  console.log('App opened successfully');       
});