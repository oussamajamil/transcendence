import { ApiProperty } from '@nestjs/swagger';

// model User {
//     id              String              @id @default(uuid())
//     login           String              @unique
//     avatar          String?
//     level           Int                 @default(0)
//     exp             Int                 @default(0)
//     points          Int                 @default(0)

//     relations       Relation[]          @relation("relations")
//     relationsWith   Relation[]          @relation("relation_with")
//     winHistory      MatchHistory[]      @relation("winner")
//     loseHistory     MatchHistory[]      @relation("loser")
//     ownedChannels   Channel[]           @relation("channel_owner")
//     membership      Membership[]        @relation("channel_member")
//     messages        Message[]           @relation("user_messages")
//     achievements    AchievementProgress[]
//     rank            rank                @relation(fields: [rankId], references: [id])
//     rankId          String              @map("rank_id")

//     createdAt       DateTime            @default(now()) @map("created_at")

//     @@map("users")
//   }
export class CreateUserDto {
  @ApiProperty({ required: true })
  login: string;
  @ApiProperty({ required: false })
  avatar: string;
  @ApiProperty({ required: false })
  level?: number;
  @ApiProperty({ required: false })
  exp?: number;
  @ApiProperty({ required: false })
  points?: number;
  @ApiProperty({ required: true })
  rankId: string;
}
