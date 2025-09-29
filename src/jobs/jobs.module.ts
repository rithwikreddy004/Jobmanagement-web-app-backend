


// src/jobs/jobs.module.ts
import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { PrismaModule } from '../prisma/prisma/prisma.module'; // Import the PrismaModule

@Module({
  imports: [PrismaModule], // Add PrismaModule to imports
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}