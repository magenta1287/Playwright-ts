import test, {expect} from '@playwright/test'
test("Accept alert", async ({ page }) => {
    page.on('dialog',type=>{
        const alertName=type.type()
        //alert name=> alert,confirm,prompt
        console.log(alertName)
        console.log(type.message())


        if(alertName==='confirm'){
            //alert===confirm
            //confirm===confirm
            type.accept()
        }else{
            type.dismiss()
        }
    })

await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
await page.locator("[id='accept-choices']").click()
await page.waitForTimeout(3000)
await page.frameLocator("[name='iframeResult']").locator("//button[text()='Try it']").click()
await expect(page.frameLocator("[name='iframeResult']").locator("#demo")).toHaveText("You pressed OK!")
})
