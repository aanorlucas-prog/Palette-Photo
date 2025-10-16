/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateInvoiceDto {
  @IsString()
  number: string;

  @IsDateString()
  issueDate: string;

  @IsDateString()
  dueDate: string;

  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsNumber()
  quoteId?: number;

  @IsNumber()
  clientId: number;
}
