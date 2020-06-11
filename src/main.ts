import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { Express } from 'express';
import { json } from 'body-parser';
import { ExpressAdapter } from '@nestjs/platform-express';

const server: Express = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  await app.listen(3000);

  app.use(json({limit: '50mb'}));
  app.init();
}

bootstrap();
