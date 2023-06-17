/*
  Warnings:

  - A unique constraint covering the columns `[user_id,relation_with_id]` on the table `relations` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "relations_user_id_relation_with_id_key" ON "relations"("user_id", "relation_with_id");
