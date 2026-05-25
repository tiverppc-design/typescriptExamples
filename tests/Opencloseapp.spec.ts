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

  const frame = page.frameLocator('iframe');
  await frame.locator('body').selectOption('EMP. ID');
  console.log("value selected from dropdown");
  await page.waitForTimeout(5000);

  await frame.locator('body').fill('234');
  console.log("value entered in search box");
  await page.waitForTimeout(5000);
  await frame.locator('search').click(); 
  console.log("search button clicked");

  //click on check box

  await frame.locator('//input[@name="chkLocID[]"]').uncheck();
  console.log("Unchecked the checkbox");

  //delete the record
    await frame.locator('//input[@value="delete"]').click();


     // select value from dropdown using index

     await frame.locator('select[@name="loc_code"]').selectOption({index: 3});
     console.log("value selected using index");

     //select value from dropdown using value attribute

     await frame.locator('select[@name="loc_code"]').selectOption({value:"EMP. ID"});
     console.log("value selected from dropdown using atrribute value");

     //wait for load state
     await page.waitForLoadState('networkidle');
     console.log("Page loaded successfully");
     

});

 