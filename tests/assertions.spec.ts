import { test, expect } from '@playwright/test'
test("Retry Soft  Assertion",async({page})=>{
    
await page.goto("https://www.leafground.com/input.xhtml")
//Assertion - expect - soft assertion execution will not stop but test will fail
await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeDisabled({timeout:15000})
console.log("Assertion 1 completed")
})

test("Non Retry Assertion",async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")

const actualValue = await page.title()
console.log("This is the page title"+actualValue)
const expectedValue = "Leaftaps - TestLeaf Automation Platform"
expect(actualValue).toEqual(expectedValue)

})
