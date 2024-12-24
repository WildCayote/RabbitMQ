import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly amqpConnection: AmqpConnection,
  ) {}

  @Get()
  getHello() {
    return this.appService.send_test('lkjlk');
  }

  @Post()
  sendMessage(@Body() data: { text: string }) {
    this.amqpConnection.publish('', 'test', data.text);
  }
}
