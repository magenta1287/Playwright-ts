import test, { chromium, firefox } from '@playwright/test'

test(`Launching browsers`,async()=>{

    const browser= await chromium.launch({headless:false,channel:'chrome'}) //creates connection with nodejs server of chromium
    const context= await  browser.newContext() //browserwindow -browserContext
    const page=  await context.newPage() //tab opened in the window
    await page.goto("http://www.google.com")

} )


test("Launching firefox browsers",async()=>{

    const browser= await firefox.launch({headless:false}) //creates connection with nodejs server of chromium
    const context= await  browser.newContext() //browserwindow -browserContext
    const page=  await context.newPage() //tab opened in the window
    await page.goto("http://www.google.com")

} )
// test(`Launching browsers`,async()=>{


//     const browser= await chromium.launch({headless:false,channel:'chrome'}) //creates connection with nodejs server of chromium
//     const context= await  browser.newContext() //browserwindow -browserContext
//     const page=  await context.newPage() //tab opened in the window
//     await page.goto("http://teatleaf.com/")


// } )
// import test, { chromium } from '@playwright/test'


// test('Login Page',async()=>{


//     const browser= await chromium.launch({headless:false,channel:'chrome'})
//     const context=await browser.newContext()
//     const page=await context.newPage()
//     await page.goto("http://leaftaps.com/opentaps/control/main")


//     await page.locator('#username').fill("DemoSalesManager")
//     await page.locator('[name=PASSWORD]').fill("crmsfa")
//     await page.locator('.decorativeSubmit').click()
//     await page.locator(`text='CRM/SFA'`).click()
//     await page.locator(`text='Leads'`).click()
//     //wait for 4 seconds
//     await page.waitForTimeout(4000)


//    const title =await page.title()
//    console.log(title)

// })
test('Login Page Salesforce',async()=>{


    const browser= await chromium.launch({headless:false,channel:'chrome'})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://login.salesforce.com/?locale=in")


    await page.locator('#username').fill("dilip@testleaf.com")
    await page.locator('[name=pw]').fill("Leaf@2025")
    await page.locator('#Login').click()
    // await page.locator(`text='CRM/SFA'`).click()
    // await page.locator(`text='Leads'`).click()
    // wait for 4 seconds
    await page.waitForTimeout(6000)


   const title =await page.title()
   console.log(title)

})