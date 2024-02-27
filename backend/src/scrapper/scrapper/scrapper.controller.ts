import { Controller, Get, Query } from '@nestjs/common';
import { ScrapperService } from './scrapper.service';

@Controller('scrapper')
export class ScrapperController {
  constructor(private readonly scrapperService: ScrapperService) {}
  @Get('/domainscrap/')
  getDomainScrap(@Query('domain') domain: string) {
    return this.scrapperService.scrapDomain(domain);
  }
}
