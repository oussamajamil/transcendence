import { ChannelType } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

export class CreateChannelDto {
  @IsString()
  name: string;
  @IsString()
  password: string;
  @IsEnum(ChannelType)
  type: ChannelType;
  @IsString()
  ownerId: string;
}
