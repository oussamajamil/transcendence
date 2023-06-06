// id              String        @id @default(uuid())

import { RelationType } from '@prisma/client';
import { IsEnum, IsString } from 'class-validator';

// type            RelationType
// user            User          @relation("relations", fields: [userId], references: [id])
// userId          String        @map("user_id")
// relationWith    User          @relation("relation_with", fields: [relationWithId], references: [id])
// relationWithId  String        @map("relation_with_id")

// createdAt DateTime      @default(now()) @map("created_at")
// updatedAt DateTime      @default(now()) @updatedAt @map("updated_at")

export class CreateRelationDto {
  @IsEnum(RelationType)
  type: RelationType;
  @IsString()
  userId: string;
  @IsString()
  relationWithId: string;
}
