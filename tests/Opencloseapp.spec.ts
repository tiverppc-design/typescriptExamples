import {test} from '@playwright/test';

class app3{
  constructor(){

let url = 'http://google.com';
let username = 'testuser';
let password = 'testpassword';
test('open and close app', async ({page}) => {
  await page.goto(url);
  await page.waitForTimeout(5000);
  console.log('App opened successfully');     
  await page.locator('body').fill(username);
      console.log('Username entered successfully');
         await  page.locator('body').fill(password);
   console.log('Password entered successfully');
  await page.waitForTimeout(5000);
     if (username === 'testuser' && password === 'testpassword') {
    console.log('Login successful');
  } else {
    console.log('Login failed');
  }

  await page.locator('body').hover();
  await page.waitForTimeout(5000);
  
  await page.locator('body').click();
  await page.waitForTimeout(5000);
  console.log('App closed successfully'); 


})

  } 
}

const app4 = new app3();