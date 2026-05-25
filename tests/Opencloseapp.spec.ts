import {test, expect} from '@playwright/test';
const url= 'http://google.com';
const username : string = 'testuser';
const password : string = 'testpassword';
test('open and close app', async ({page}) => {
  await page.goto(url);
  await page.waitForTimeout(5000);
  console.log('App opened successfully');   
  // Simulate login by filling in username and password fields
  await page.locator('body').fill(username); 
      console.log('Username entered successfully');
      // Enter Password 
         await  page.locator('body').fill(password);
   console.log('Password entered successfully');
  await page.waitForTimeout(5000);
     //click on login button and validate 
        await page.locator('body').click();
    console.log('Login button clicked successfully');
    // Validate login successfully
        await expect(page).toHaveURL('http://google.com');
    console.log('Login validated successfully');
  // Mouse hover on Menu 
  await page.locator('text=Test').hover();
   console.log('Mouse hovered successfully');
  await page.waitForTimeout(5000);
     // Click on Submenu  
         await page.getByText('Test').click();
   console.log('Mouse clicked successfully');
  await page.waitForTimeout(5000);
// Click on Logout button
   await page.locator('body').click();    
  console.log('App logout successfully'); 
});

 