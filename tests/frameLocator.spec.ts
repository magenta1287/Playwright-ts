import test from '@playwright/test'

test("Handle frame with frame locator", async({page}) => {
    await page.goto("https://www.leafground.com/frame.xhtml")
//locate frame and click
await page.waitForTimeout(5000)
await page.frameLocator("(//iframe)[1]").locator("#Click").click()
await page.waitForTimeout(5000)


//using frameLocator
await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()
})