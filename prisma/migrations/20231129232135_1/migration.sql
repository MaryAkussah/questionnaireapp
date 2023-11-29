-- DropForeignKey
ALTER TABLE `ResponseSectionOne` DROP FOREIGN KEY `ResponseSectionOne_responseMainId_fkey`;

-- DropForeignKey
ALTER TABLE `ResponseSectionTwo` DROP FOREIGN KEY `ResponseSectionTwo_responseMainId_fkey`;

-- AlterTable
ALTER TABLE `ResponseMain` ADD COLUMN `responseSectionOneId` INTEGER NULL,
    ADD COLUMN `responseSectionTwoId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `ResponseMain` ADD CONSTRAINT `ResponseMain_responseSectionOneId_fkey` FOREIGN KEY (`responseSectionOneId`) REFERENCES `ResponseSectionOne`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ResponseMain` ADD CONSTRAINT `ResponseMain_responseSectionTwoId_fkey` FOREIGN KEY (`responseSectionTwoId`) REFERENCES `ResponseSectionTwo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
