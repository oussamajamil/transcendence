import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateRankDto {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  name: string;

  @IsNumber()
  requiredPoints: number;
  @IsString()
  @IsOptional()
  emblem?: string;
  @IsString()
  @IsOptional()
  border?: string;
}
