// https://login.salesforce.com/?locale=in
// setTimeout(()=>{debugger;},4000) freeze the DOM
// ravindran.gen

// RaviTestleaf#1432
// Username: hari.radhakrishnan@qeagle.com
// Password: Leaf$1234
// deepatel04889@agentforce.com
// Leaf@123
import { test, expect } from '@playwright/test'
import { generateRandomInput } from '../dataGenerator' // Import the data generator
//Verify Page title
async function  verifyPageTitle(page, expectedPageTitle) {
    const pageTitle = await page.title(page)
    if (expectedPageTitle === pageTitle) {
        console.log(`Page Title is as expected: ${pageTitle}`)
    } else {
        throw new Error(`Test failed: Expected "${expectedPageTitle}", but got "${pageTitle}"`)
    }
}

// Login function for Salesforce
async function loginToSalesForce(page) {
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.waitForSelector("#username");
    await page.getByLabel('Username').fill('deepatel04889@agentforce.com');
    await page.getByLabel('Password').fill('Leaf@123');
    await page.getByRole('button', { name: 'Log In' }).click()
    await page.waitForSelector('[title="App Launcher"]');
    await page.waitForTimeout(3000)
}
test('Verify Lead Creation and Conversion to Opportunity', async ({ page }) => {
    //Steps 1 to 3 - Login to Salesforce and check on homepage - steps 1 to 3
    await loginToSalesForce(page);
    const expectedPageTitle= "Home | Salesforce"
    verifyPageTitle(page, expectedPageTitle)
    //Steps 4 to 6 - Select the App launcher, View all and Marketing
    await page.locator(".slds-icon-waffle").click()
    await page.locator('//button[@aria-label="View All Applications"]').click()
    await page.locator('//input[@placeholder="Search apps or items..."]').fill("Marketing")
    await page.waitForSelector('[title="Track sales and marketing efforts with CRM objects."]')
    await page.locator('//p[@class="slds-truncate"]').click()
   //Steps 7  - Navigate to the Leads tab from the Marketing dashboard.
    await page.locator('//a[@title="Leads"]').click()
   //Step 8 Click on the New button to create a lead.
    await page.locator('[name="New"]').click()
    await page.waitForSelector('[name="salutation"]');
   //Step 9 Fill in all the mandatory fields (Salutation, First Name, Last Name, Company)
    await page.locator('[name="salutation"]').click()
    await page.locator('[title="Mr."]').click()
    await page.locator('//input[@placeholder="First Name"]').fill("Sherlock")
    await page.locator('//input[@name="lastName"]').fill("Holmes")
    await page.locator('//input[@name="Company"]').fill("Private Investigators")
   //Step 10 Click on the Save button and verify confirmation message
    await page.locator(' [name="SaveEdit"]').click()
    await page.waitForSelector('[name="Submit"]');
    //Step 11 Select Convert
    await page.getByRole('button', { name: 'Show more actions' }).click();
    await page.getByRole('menuitem', { name: 'Convert' }).click();
    await page.waitForTimeout(3000)
    //Step 12 Enter new opportunity
    await page.locator('[title="Private Investigators-"]').click()
    await page.waitForTimeout(3000)
    // await page.locator('input[aria-required="true"]').nth(3).clear()
    await page.locator('//span[text()="Opportunity Name"]/../following-sibling::input').fill("Deepti")
    // Step 13 
    await page.locator('//button[text()="Convert"]').click()
    //Step 14
    await page.locator('//button[text()="Go to Leads"]').click()
});
test.only('Create and verify a New Case in Chatter', async ({ page }) => {
    //Steps 1 to 3 - Login to Salesforce and check on homepage - steps 1 to 3
    await loginToSalesForce(page);
    const expectedPageTitle= "Home | Salesforce"
    verifyPageTitle(page, expectedPageTitle)
    //Steps 4 to 6 - Select the App launcher, View all and Service link
    await page.locator(".slds-icon-waffle").click()
    await page.locator('//button[@aria-label="View All Applications"]').click()
    await page.locator('//input[@placeholder="Search apps or items..."]').fill("Service")
    await page.waitForSelector('[title="Manage customer service with accounts, contacts, cases, and more"]')
    await page.locator('[title="Manage customer service with accounts, contacts, cases, and more"]').click()
    // Steps 7 to 9  Navigate to Cases, select New and Search Contacts
    await page.locator('[title="Cases"]').click()
    await page.locator('[title="New"]').nth(1).click()
    await page.locator('[placeholder="Search Contacts..."]').click()
    await page.locator('[title="New Contact"]').click()
    // Steps 10 to 12 Enter contact details and save
    await page.waitForSelector('[name="salutation"]');
    await page.locator('[name="salutation"]').click()
    await page.locator('[title="Mr."]').click()
    await page.locator('[name="firstName"]').fill("Hercule")
    await page.locator('[name="lastName"]').fill("Poirot")
    await page.click("(//button[text()='Save'])[2]")
    //Steps 13 to 16 Search Accounts
    await page.click('[placeholder="Search Accounts..."]')
    await page.locator('[title="New Account"]').click()
    await page.locator('[name="Name"]').fill("UmaMaheshwari")
    await page.locator('[name="AccountNumber"]').fill("10002002348900")
    await page.locator('//button[@aria-label="Rating"]').click()
    await page.locator("[title='Hot']").click()
    await page.locator('(//button[text()="Save"])[2]').click()
    //Steps 17 to 19 Select Status of New and Priority High. Select Case Origin as Email. 
    await page.locator('[data-value="New"]').click()
    await page.locator('//button[@data-value="New"]').click()
    await page.locator('[data-value="Medium"]').click()
    await page.locator('[data-value="High"]').click()
    await page.locator('//button[@aria-label="Case Origin"]').click()
    await page.locator('[title="Email"]').click()
    // Steps 20 and 21 Enter Subject and Description and Save
    await page.locator('[name="Subject"]').fill("Product Return Request")
    await page.locator('//label[text()="Description"]').fill("Requesting a return for a defective product")
    await page.locator('//button[text()="Save"]').click()
    // Steps 22 to 23  Edit the Status under Details category, choose ‘Escalated’ option and Save
    // await page.locator('//button[text()="Save"]').click()
    // await page.locator('//button[text()="Save"]').click()
    // await page.locator('//button[text()="Save"]').click()
    // // Steps 24 Enter a valid data in the Share an Update input field and click on the Share button.
    // await page.locator('//button[text()="Save"]').click()
    // await page.locator('//button[text()="Save"]').click()
    // // Steps 25 Click on the dropdown icon and choose the Like on Chatter option.
    // await page.locator('//button[text()="Save"]').click()
    // await page.locator('//button[text()="Save"]').click()
    //  // Steps 26 Navigate to the Chatter tab and verify the post liked by the user.
    //  await page.locator('//button[text()="Save"]').click()
    // await page.locator('//button[text()="Save"]').click()
});