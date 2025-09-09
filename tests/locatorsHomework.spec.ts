

// //Page fixture example
// test("Page fixture example",async({page})=>{
//     await page.goto("https://www.leafground.com/select.xhtml")
//     await page.waitForTimeout(3000)
//     await page.selectOption(".ui-selectonemenu",{label:"Playwright"})
// })
// test("Page fixture example 2",async({page})=>{  
//     await page.goto("https://www.telerik.com/contact")
//     await page.waitForSelector("#onetrust-reject-all-handler")
//     page.locator("#onetrust-reject-all-handler").click()
//     await page.selectOption("#Dropdown-1",{index:1})
//     await page.selectOption("#Dropdown-2",{value:"Kendo UI"})
//     await page.keyboard.press('PageDown');
//     await page.selectOption("#Country-1",{label:"India"})
//     await page.waitForTimeout(3000)
// })


import { test, expect } from '@playwright/test'
import { generateRandomInput } from '../dataGenerator' // Import the data generator
// Get Page Title
async function getPageTitle(page) {
    const pageTitle = await page.title();
    console.log(`Page Title: ${pageTitle}`);
}
//Verify Page title
async function  verifyPageTitleAndURL(page, expectedPageTitle, expectedPageURL) {
    const pageTitle = await page.title(page)
    const pageURL = await page.url(page)
    if (expectedPageTitle === pageTitle) {
        console.log(`Page Title is as expected: ${pageTitle}`)
    } else {
        throw new Error(`Test failed: Expected "${expectedPageTitle}", but got "${pageTitle}"`)
    }
    if (expectedPageURL === pageURL) {
        console.log(`Page URL is as expected: ${pageURL}`)
    } else {
        throw new Error(`Test failed: Expected "${expectedPageURL}", but got "${pageURL}"`)
    }
}
// Login function leaftaps
async function login(page) {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForSelector("#username");
    await page.locator("#username").fill('Demosalesmanager');
    await page.locator("#password").fill('crmsfa');
    await page.locator(".decorativeSubmit").click();
    await page.waitForSelector("#label");
    await page.locator("#label").click();
}
// Login function for Salesforce
async function loginToSalesForce(page) {
    await page.goto("https://login.salesforce.com/");
    await page.waitForSelector("#username");
    await page.getByLabel('Username').fill('dilip@testleaf.com');
    await page.getByLabel('Password').fill('Leaf@2025');
    await page.getByRole('button', { name: 'Log In' }).click()
    await page.waitForSelector(".onesetupCreateMenuTrigger");
    await page.waitForTimeout(6000)
}
// Create Lead function
async function createLead(page, leadData) {
    await page.waitForSelector("#left-content-column");
    await page.locator("//a[text()='Create Lead']").click();
    await page.waitForSelector('(//input[@name="companyName"])[2]');
    await getPageTitle(page);
    await page.locator('(//input[@name="companyName"])[2]').fill(leadData.companyName);
    await page.locator("//input[@id='createLeadForm_firstName']").fill(leadData.firstName);
    await page.locator("//input[@id='createLeadForm_lastName']").fill(leadData.lastName);
    await page.locator("//input[@id='createLeadForm_generalProfTitle']").fill(leadData.generalProfTitle);
    await page.locator("//input[@id='createLeadForm_personalTitle']").fill(leadData.personalTitle);
    await page.locator("//input[@id='createLeadForm_annualRevenue']").fill(leadData.annualRevenue);
    await page.locator("//input[@id='createLeadForm_departmentName']").fill(leadData.departmentName);
    await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill(leadData.primaryPhoneNumber);
    await page.locator(".smallSubmit").click();
}

// Edit Lead function
async function editLead(page, leadName, newLeadData) {
    await page.waitForSelector("#left-content-column");
    await page.locator("//a[text()='Find Leads']").click();
    await page.waitForSelector("//input[@name='id']");
    await page.locator("(//input[@name='firstName'])[3]").fill(leadName);
    await page.locator("//button[text()='Find Leads']").click();
    await page.waitForSelector("//a[@class='linktext']")
    await page.locator(`//a[@class="linktext" and contains(text(), "${leadName}")]`).nth(1).click();
    await page.waitForSelector("//a[text()='Edit']")
    await page.locator("//a[text()='Edit']").click();
    await page.waitForSelector("//input[@value='Update']")
    await page.locator("//input[@id='updateLeadForm_firstName']").fill(newLeadData.firstName);
    await page.locator("//input[@id='updateLeadForm_lastName']").fill(newLeadData.lastName);
    await page.locator(`//input[@value="Update"]`).click();
    await page.waitForSelector("#viewLead_firstName_sp")
}

// Test to create and edit a lead
test('Create and Edit Lead', async ({ page }) => {
    await login(page);

    // Generate random lead data
    const leadData = generateRandomInput()
    await createLead(page, leadData)

    // Verify the firstName  and lastname after creation
    await expect(page.locator('#viewLead_firstName_sp')).toHaveText(leadData.firstName);
    await expect(page.locator('#viewLead_lastName_sp')).toHaveText(leadData.lastName);
    
    //Edit the newly created lead
    const newLeadData = generateRandomInput()
    await editLead(page, leadData.firstName, newLeadData)

    // Verify that the lead was updated
    await expect(page.locator('#viewLead_firstName_sp')).toHaveText(newLeadData.firstName);
    await expect(page.locator('#viewLead_lastName_sp')).toHaveText(newLeadData.lastName);
    await getPageTitle(page);
    
});

// Assignment 3
test('Create Account', async ({ page }) => {
    await loginToSalesForce(page);
    const expectedPageTitle= "Home | Salesforce"
    const expectedPageURL= "https://testleaf4-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home"
    verifyPageTitleAndURL(page, expectedPageTitle, expectedPageURL)
    
});


