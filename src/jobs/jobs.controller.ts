// src/jobs/jobs.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto'; // DTO for validation
import { Query } from '@nestjs/common';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body() createJobDto: CreateJobDto) {
    return this.jobsService.createJob(createJobDto);
  }

  @Get()
  // Use @Query to get the URL parameters
  findAll(@Query('jobTitle') jobTitle?: string, @Query('location') location?: string, @Query('jobType') jobType?: string, @Query('minSalary') minSalary?: string, @Query('maxSalary') maxSalary?: string) {
    return this.jobsService.findAll({ jobTitle, location, jobType, minSalary, maxSalary });
  }
}
