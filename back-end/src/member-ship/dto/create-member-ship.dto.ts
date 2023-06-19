import { MembershipStatus, MembershipType } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMemberShipDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  channelId: string;

  @IsString()
  @IsNotEmpty()
  type: MembershipType;

  @IsString()
  @IsNotEmpty()
  status: MembershipStatus;
}
