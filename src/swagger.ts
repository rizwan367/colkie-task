import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function swaggerInit(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Colkie')
    .setDescription('Colkie NestJs task')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);
}
