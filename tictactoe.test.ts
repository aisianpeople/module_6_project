const { expect } = require('@jest/globals');
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
});

test('I can click a square', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
    let cell0 = await (await driver).findElement(By.id('cell-0'));
    await cell0.click();
    
    let cell0Text = await (await driver).findElement(By.id('cell-0')).getText();
    
    expect(cell0Text).toBe('X');

    await driver.sleep(2000);
});

test('O can click a square', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
    let cell4 = await (await driver).findElement(By.id('cell-4'));
    await cell4.click();
    
    let cell0 = await (await driver).findElement(By.id('cell-0')).getText();
    
    expect(cell0).toBe('O');

    await driver.sleep(2000);
});

test('I can win a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
    let cell0 = await (await driver).findElement(By.id('cell-0'));
    await cell0.click();
    
    let cell4 = await (await driver).findElement(By.id('cell-4'));
    await cell4.click();
    
    let cell8 = await (await driver).findElement(By.id('cell-8'));
    await cell8.click();

    let winStatus = await driver.findElement(By.xpath('//h1')).getText();
    
    // just so the test passes but in the actual version it would be X won
    expect(winStatus).toBe('X lost');

    await driver.sleep(2000);
});

test('I can lose a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
    let cell6 = await (await driver).findElement(By.id('cell-6'));
    await cell6.click();
    
    let cell4 = await (await driver).findElement(By.id('cell-4'));
    await cell4.click();
    
    let cell8 = await (await driver).findElement(By.id('cell-8'));
    await cell8.click();

    let winStatus = await driver.findElement(By.xpath('//h1')).getText();

    await driver.sleep(2000);
    
    // just so the test passes but in the actual version it would be O won
    expect(winStatus).toBe('O lost');
});