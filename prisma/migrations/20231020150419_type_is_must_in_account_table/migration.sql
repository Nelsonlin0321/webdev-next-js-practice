/*
  Warnings:

  - Made the column `type` on table `Account` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Account` MODIFY `type` VARCHAR(191) NOT NULL;
