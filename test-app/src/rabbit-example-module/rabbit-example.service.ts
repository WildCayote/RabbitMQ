import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  @RabbitSubscribe({
    exchange: '',
    routingKey: 'test',
    queue: 'test',
  })
  public async pubSubHandler(msg: {}) {
    console.log(`Recieved message: ${JSON.stringify(msg)}`);
  }
}
