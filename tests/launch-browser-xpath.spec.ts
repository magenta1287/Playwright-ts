import test, { chromium, expect, firefox } from '@playwright/test'
// This is the ;ogin test but using xpath instead of css selectors
test('Login Page Salesforce',async()=>{


    const browser= await chromium.launch({headless:false,channel:'chrome'})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("//input[@id='username']").fill("dilip@testleaf.com")

    await page.locator("//input[@id='password']").fill("Leaf@2025")
    await page.locator("//input[@class='button r4 wide primary']").click()

    // await page.waitForTimeout(6000) has been commented out as results in flaky test.
    // Wait for the navigation to complete and the home page to load
   await page.waitForFunction(() => document.title.includes('Home') || document.title.includes('Salesforce'), { timeout: 10000 });

   const title =await page.title()
   console.log(title)

})

