/// <reference path="./types/nestjs-common.d.ts" />
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: true, credentials: true });
  app.setGlobalPrefix('v1');
  const port = Number(process.env.PORT || 4000);
  await app.listen(port);
}

bootstrap();
