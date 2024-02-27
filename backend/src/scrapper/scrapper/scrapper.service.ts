import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
@Injectable()
export class ScrapperService {
  async scrapDomain(domain: string) {
    const browser = await puppeteer.launch({
      headless: true,
      defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto(`https://who.is/whois/${domain}`, {
      waitUntil: 'networkidle0',
    });

    const data = await page.$$('.queryResponseContainer');
    console.log(data);
    await browser.close();
    return await data;
  }
}
