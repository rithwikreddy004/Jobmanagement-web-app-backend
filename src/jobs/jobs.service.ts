/*
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma/prisma.service'; 
import { CreateJobDto } from './dto/create-job.dto'; 

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  async createJob(createJobDto: CreateJobDto) {
    return this.prisma.job.create({
      data: createJobDto,
    });
  }

   async findAll(params: { jobTitle?: string, location?: string, jobType?: string, minSalary?: string, maxSalary?: string }) {
    const { jobTitle, location, jobType, minSalary, maxSalary } = params;

    const where: any = {};

    if (jobTitle) {
      where.jobTitle = { contains: jobTitle, mode: 'insensitive' };
    }

    if (location) {
      where.location = { equals: location };
    }

    if (jobType) {
      where.jobType = { equals: jobType };
    }

    if (minSalary && maxSalary) {
      where.salaryMin = { gte: Number(minSalary) };
      where.salaryMax = { lte: Number(maxSalary) };
    }

    return this.prisma.job.findMany({
      where,
    });
  }
}
*/


// src/jobs/jobs.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { CreateJobDto } from './dto/create-job.dto';
import { Prisma } from '@prisma/client'; // Import Prisma to use the type

@Injectable()
export class JobsService {
  constructor(private prisma: PrismaService) {}

  async createJob(createJobDto: CreateJobDto) {
    return this.prisma.job.create({
      data: createJobDto,
    });
  }

  async findAll(params: { jobTitle?: string, location?: string, jobType?: string, minSalary?: string, maxSalary?: string }) {
    const { jobTitle, location, jobType, minSalary, maxSalary } = params;
    
    // We explicitly define the 'where' object now
    const where: Prisma.JobWhereInput = {};

    if (jobTitle) {
      where.jobTitle = { contains: jobTitle, mode: 'insensitive' };
    }

    if (location) {
      where.location = { equals: location };
    }

    if (jobType) {
      where.jobType = { equals: jobType };
    }

    // Only apply salary filter if both values exist
    if (minSalary && maxSalary) {
      where.salaryMin = { gte: Number(minSalary) };
      where.salaryMax = { lte: Number(maxSalary) };
    }

    // We can also add other filters for requirements, etc. if you want
    
    return this.prisma.job.findMany({
      where,
    });
  }
}