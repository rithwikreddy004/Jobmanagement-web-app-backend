import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma/prisma.service';
import { PrismaModule } from './prisma/prisma/prisma.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [PrismaModule, JobsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
