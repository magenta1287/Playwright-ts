
import test, {expect} from '@playwright/test'

test("Handle frame with index value", async({page}) => {
      await page.goto("https://www.leafground.com/frame.xhtml")
      //frame is html within html. count of frames where main page will also be considered as a frame
      const frameCount=page.frames().length
      console.log("Frame count is " + frameCount)
      await page.frameLocator("(//iframe)[1]").locator("#Click").click()
      await expect(page.frameLocator("(//iframe)[1]").locator("#Click")).toHaveText("Hurray! You Clicked Me.")
      await page.waitForTimeout(2000)
      //nested frame 
      await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("button#Click").click()
      await expect(page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("button#Click")).toHaveText("Hurray! You Clicked Me.")

})