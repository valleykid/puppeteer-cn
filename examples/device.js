const puppeteer = require('../lib');
const devices = require('../lib/devices');
const iPhone = devices['iPhone 6'];

const timeout = delay => new Promise((resolve, reject) => setTimeout(resolve, delay));

puppeteer.launch({ headless: false }).then(async browser => {
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto('https://www.baidu.com');

  // other actions...
  await page.waitForSelector('#index-form input.se-input');
  const textHandle = await page.$('#index-form input.se-input');
  await textHandle.type('puppeteer', { delay: 50 });
  await textHandle.press('Enter');
  await timeout(1000);

  await browser.close();
});