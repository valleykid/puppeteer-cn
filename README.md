# puppeteer-cn

> Puppeteer lives in China

As we know, the Google's servers are hard to access in China, But puppeteer relies on Chromium or Chrome59+. You can try `puppeteer-cn` if encounter the problem.

## Install

```bash
npm install puppeteer-cn --save
```

## Usage

Same as [puppeteer](https://github.com/GoogleChrome/puppeteer), you can replace `puppeteer` with `puppeteer-cn`.

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

## License

MIT
