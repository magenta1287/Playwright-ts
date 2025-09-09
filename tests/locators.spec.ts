import test, { chromium } from '@playwright/test';
// Playwright test with different locators

// test('Locators in Playwright',async()=>{    
//     const browser= await chromium.launch({headless:false,channel:'chrome'})
//     const context=await browser.newContext()
//     const page=await context.newPage()
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
//     //text locator
//     await page.locator('text=Username').click()
//     await page.locator('text=Username').fill("Admin")

//     //label locator
//     await page.locator('label:has-text("Password")').click()
//     await page.locator('label:has-text("Password")').fill("admin123")

//     //placeholder locator
//     await page.locator('[placeholder="Username"]').click()
//     await page.locator('[placeholder="Username"]').fill("Admin")

//     //role locator
//     await page.getByRole('button', { name: 'Login' }).click()

//     //css locator
//     await page.locator('.oxd-button').click()

//     //xpath locator
//     await page.locator('//img[@alt="client brand banner"]').click()

//     //chained locator
//     await page.locator('.orangehrm-login-branding > img').click()

//     //nth locator
//     await page.locator('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').nth(0).click()
//     await page.locator('text=Logout').click()

//     await browser.close()
// })
// test('Plawright dropdown locator',async()=>{
//     const browser= await chromium.launch({headless:false,channel:'chrome'})
//     const context=await browser.newContext()
//     const page=await context.newPage()
//     await page.goto("https://www.orangehrm.com/contact-sales/")
//     //dropdown locator
//     await page.locator('select[name="Country"]').selectOption('India')
//     await page.waitForTimeout(3000)
//     await browser.close()


test.skip("Dropdown with selectOption", async () => {
    const browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://www.leafground.com/select.xhtml");

    // Dropdown with selectOption using label, index, and value
    await page.selectOption(".ui-selectonemenu", { label: "Playwright" });
    await page.waitForTimeout(3000); // Wait for 3 seconds to observe the selection
    await page.selectOption(".ui-selectonemenu", { index: 1 });
    await page.selectOption(".ui-selectonemenu", { value: "Puppeteer" });
    await page.waitForTimeout(3000); // Wait for 3 seconds to observe the selection

    const optionsCount = await page.locator(".ui-selectonemenu > option").count();
    console.log("Total options in dropdown: " + optionsCount);

    for (let i = 0; i < optionsCount; i++) {
        const option = await page.locator(".ui-selectonemenu > option").nth(i).textContent();

        // Check if the displayed values in the dropdown are as expected
        if (option?.trim() === "Selenium" || option?.trim() === "Cypress" || 
            option?.trim() === "Playwright" || option?.trim() === "Puppeteer" || 
            option?.trim() === "TestCafe" || option?.trim() === "WebDriverIO") {
            console.log(option?.trim() + " is displayed in the dropdown as expected");
        } else {
            console.log(option?.trim() + " is NOT displayed in the dropdown as expected");
        }
    }

    await browser.close();
})

test.only("Non select dropdown", async () => {
    const browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://www.leafground.com/select.xhtml");
     await page.waitForTimeout(3000); // Wait for 3 seconds to observe the selection
    // Non-select dropdown
    await page.locator("[id='j_idt87:country_label']").click(); // Click to open the dropdown
    await page.locator("[id='j_idt87:country_3']").click(); // Click on the specific option
    await page.waitForTimeout(3000); // Wait for 3 seconds to observe the selection

    await browser.close();
})