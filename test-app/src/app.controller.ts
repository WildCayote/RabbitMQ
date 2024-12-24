import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async sendMessage(@Body() data: { text: string }) {
    await this.appService.send_test(data.text);
  }
}
