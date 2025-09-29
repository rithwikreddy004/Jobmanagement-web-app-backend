// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // <-- THIS IS NEW

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 1. Enable CORS to allow requests from your frontend
  app.enableCors({
    origin: 'http://localhost:3001', // Make sure this matches your frontend's port
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // 2. Add global validation pipe to validate incoming data
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove extra properties from the payload
    forbidNonWhitelisted: true, // Throws an error if extra properties are sent
    transform: true, // IMPORTANT: Automatically converts payload types (e.g., string date to a Date object)
    transformOptions: {
      enableImplicitConversion: true, // Crucial for converting strings to numbers/dates
    },
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();