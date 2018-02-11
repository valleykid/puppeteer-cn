# puppeteer-cn

> Puppeteer lives in China

As we know, the Google's servers are hard to access in China, But puppeteer relies on Chromium or Chrome59+. You can try `puppeteer-cn` if encounter the problem.

众所周知，天朝很难访问google的服务器，但是puppeteer又依赖Chromium/Chrome59+。如果遇到这个问题，你可以尝试下`puppeteer-cn`。

![](https://user-images.githubusercontent.com/1892857/35903942-2f382f34-0c1c-11e8-9855-15809b1a5985.png)

## Install

```bash
npm install puppeteer-cn --save
```

## Usage

Same as [puppeteer](https://github.com/GoogleChrome/puppeteer), you can replace `puppeteer` with `puppeteer-cn`. But it first checks your local Chrome version is greater than 59, then decides whether to install Chromium by a fast mirror.

和[puppeteer](https://github.com/GoogleChrome/puppeteer)完全一样，你完全可以用`puppeteer-cn`代替之。这个包会先去检测本地Chrome版本是否大于59，再决定是否通过一个国内源下载Chromium。

```javascript
const puppeteer = require('puppeteer-cn');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
```

If you use `puppeteer/DeviceDescriptors` in some scenarios, you can do that:

某些场景下如果需要使用`puppeteer/DeviceDescriptors`，你可以这样做：

```javascript
const puppeteer = require('puppeteer-cn');
const devices = require('puppeteer-cn/devices');
const iPhone = devices['iPhone 6'];

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto('https://www.google.com');
  // other actions...
  await browser.close();
});
```

## License

MIT
