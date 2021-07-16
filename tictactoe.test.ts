import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

    await driver.sleep(2000);
    
    let cell0 = await (await driver).findElement(By.id('cell-0'));
    await cell0.click();
    
    let cell4 = await (await driver).findElement(By.id('cell-4'));
    await cell4.click();
    
    let cell8 = await (await driver).findElement(By.id('cell-8'));
    await cell8.click();

    await driver.sleep(2000);
    
});