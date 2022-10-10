-- CreateTable
CREATE TABLE `quotes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `open_price` VARCHAR(191) NOT NULL,
    `highest_price` VARCHAR(191) NOT NULL,
    `lowest_price` VARCHAR(191) NOT NULL,
    `volume` VARCHAR(191) NOT NULL,
    `close_price` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,
    `ticker` VARCHAR(191) NOT NULL,

    INDEX `quotes_date_idx`(`date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
