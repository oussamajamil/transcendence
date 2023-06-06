import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';
export class User {
  @ApiProperty({ required: true })
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  login: string;

  @ApiProperty({ required: true })
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  avatar: string;

  @ApiProperty({ required: true })
  @IsNumber()
  level: number;

  @ApiProperty({ required: true })
  @IsNumber()
  exp: number;

  @ApiProperty({ required: true })
  @IsNumber()
  points: number;

  @ApiProperty({ required: true })
  @IsString()
  rankId: string;
}
