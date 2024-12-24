import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('TEST_SERVICE') private readonly client: ClientProxy) {}
  getHello(): string {
    return 'Hello World!';
  }

  async send_test(test: string) {
    const response = await this.client.emit('test', test).toPromise();
    return response;
  }
}
