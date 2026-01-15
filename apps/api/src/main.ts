import 'reflect-metadata';
import cookieParser from 'cookie-parser';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // cookies for auth session
  app.use(cookieParser());

  // trust proxy (Cloudflare) - set on underlying HTTP adapter instance
  const instance = app.getHttpAdapter().getInstance();
  if (instance?.set) instance.set('trust proxy', 1);

  app.enableCors({
    origin: true,
    credentials: true,
  });

  app.setGlobalPrefix('v1');

  const port = Number(process.env.PORT || 4000);
  await app.listen(port);
}

bootstrap();
