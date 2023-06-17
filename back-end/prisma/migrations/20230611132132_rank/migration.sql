-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_rank_id_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "rank_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_rank_id_fkey" FOREIGN KEY ("rank_id") REFERENCES "ranks"("id") ON DELETE SET NULL ON UPDATE CASCADE;
