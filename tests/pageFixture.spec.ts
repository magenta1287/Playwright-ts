import test, { chromium } from '@playwright/test'
//Page fixture example
test("Page fixture example",async({page})=>{
    await page.goto("https://www.leafground.com/select.xhtml")
    await page.waitForTimeout(3000)
    await page.selectOption(".ui-selectonemenu",{label:"Playwright"})
})
test.only("Page fixture example 2",async({page})=>{  
    await page.goto("https://www.telerik.com/contact")
    await page.waitForSelector("#onetrust-reject-all-handler")
    page.locator("#onetrust-reject-all-handler").click()
    await page.selectOption("#Dropdown-1",{index:1})
    await page.selectOption("#Dropdown-2",{value:"Kendo UI"})
    await page.keyboard.press('PageDown');
    await page.selectOption("#Country-1",{label:"India"})
    await page.waitForTimeout(3000)
})