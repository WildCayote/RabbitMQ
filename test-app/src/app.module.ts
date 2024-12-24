import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitExampleModuleModule } from './rabbit-example-module/rabbit-example-module.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TEST_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'test',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
    RabbitExampleModuleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
