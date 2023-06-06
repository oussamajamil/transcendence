import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  login: string;
  @ApiProperty({ required: false })
  @ApiProperty({ required: true })
  @IsString()
  @IsOptional()
  @MinLength(3)
  avatar?: string;
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @MinLength(3)
  level?: number;
  @ApiProperty({ required: false })
  @IsNumber()
  exp?: number;
  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  points?: number;
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  rankId: string;
}
