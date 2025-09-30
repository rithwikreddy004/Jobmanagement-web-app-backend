// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // <-- THIS IS NEW

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 1. Enable CORS to allow requests from your frontend
  app.enableCors({
    origin: 'https://rithwiik-job-management-web-app.vercel.app', // Make sure this matches your frontend's port
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

  


  // Corrected line: We parse the port string to an integer
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  await app.listen(port);
}
bootstrap();