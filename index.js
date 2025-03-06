import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({headless: false, 
  args: [
    "--single-process",
  ]
});
const page = await browser.newPage();

console.log("NAVIGATION STARTED");
// Note at the point of testing this website, was reliably triggering the error.
// If this no more the case and you know other websites where this error can be
// triggered, please update accordingly. Or provide a minimized version of a
// website.
await page.goto('https://careers.paradox.ai/', {waitUntil: "networkidle2"});
console.log("NAVIGATION FINISHED");
await browser.close();
