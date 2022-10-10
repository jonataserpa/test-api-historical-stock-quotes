import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import readline from 'readline';

async function bootstrap() {
  console.log('readline bootstrap', readline);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
