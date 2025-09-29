// src/jobs/dto/create-job.dto.ts
import { IsString, IsNotEmpty, IsInt, IsDate, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateJobDto {
  @IsNotEmpty()
  @IsString()
  jobTitle: string;

  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  jobType: string;

  @IsNotEmpty()
  @IsInt()
  salaryMin: number;

  @IsNotEmpty()
  @IsInt()
  salaryMax: number;

  @Type(() => Date)
  @IsDate()
  applicationDeadline: Date;

  @IsNotEmpty()
  @IsString()
  jobDescription: string;

  @IsOptional()
  @IsString()
  requirements: string;

  @IsOptional()
  @IsString()
  responsibilities: string;
}