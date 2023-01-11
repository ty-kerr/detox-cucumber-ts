import { expect, element, by } from 'detox'
import { Given, Then } from '@cucumber/cucumber'

Given('I should see the {string} element', async function (testID) {
    const el = await element(by.id(testID))
    await expect(el).toExist()
})

Then('I should see the {string} text', async function (text) {
    const el = await element(by.text(text))
    await expect(el).toExist()
})
