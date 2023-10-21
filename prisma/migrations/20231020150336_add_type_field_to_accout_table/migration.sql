/*
  Warnings:

  - You are about to drop the column `providerType` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Account` DROP COLUMN `providerType`,
    ADD COLUMN `type` VARCHAR(191) NULL;
