
import test from '@playwright/test'

test("Handle frame with index value", async({page}) => {
      await page.goto("https://www.leafground.com/alert.xhtml")
//frame is html within html. count of frames where main page will also be considered as a frame
const frameCount=page.frames().length
console.log("Frame count is " + frameCount)
const frame=frameCount[1]
console.log("Before handle frame: "+await frame.locator("#Click").innerText())
await frame.locator("#Click")
console.log("After handle frame: "+await frame.locator("#Click").innerText())
// nested frame
const nestFrame=frameCount[4]
await nestFrame.locator("#Click").click()
})