import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerInit } from './swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  swaggerInit(app);
  await app.listen(3000);
}
bootstrap();
