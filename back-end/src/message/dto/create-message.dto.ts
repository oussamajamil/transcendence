// model Message {
//     id          String      @id @default(uuid())
//     content     String

import { IsString, MaxLength } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @MaxLength(255)
  content: string;

  @IsString()
  groupId: string;

  @IsString()
  userId: string;
}
