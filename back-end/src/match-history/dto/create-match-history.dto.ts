import { IsNumber, IsString } from 'class-validator';

export class CreateMatchHistoryDto {
  @IsNumber()
  winnerScore: number;
  @IsNumber()
  loserScore: number;
  @IsString()
  winnerId: string;
  @IsString()
  loserId: string;
}
