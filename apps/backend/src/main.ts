import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // we set a global prefix to make sure every request we throw to "/api" route is displayed in the frontend
  app.setGlobalPrefix('/api/commits');
  await app.listen(3000);
}
bootstrap();
