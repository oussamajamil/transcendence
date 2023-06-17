import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AbstractWsAdapter } from '@nestjs/websockets';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { MessagesGateway } from './messagesGateway/messages.gateway';
import * as cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('transcendence API')
    .setDescription('The transcendence API description')
    .setVersion('1.0')
    .build();

  app.use(cors());
  //cors
  app.useWebSocketAdapter(new IoAdapter(app));
  const gatewayMessage = app.get(MessagesGateway);
  gatewayMessage.server = app.getHttpServer();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
