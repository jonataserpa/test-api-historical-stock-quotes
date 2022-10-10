import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { PrismaService } from 'src/config/database/PrismaService';
import { MulterConfig } from 'src/config/multer.config';
import { PetraController } from './controllers/petra.controller';
import { PetraService } from './services/petra.service';

@Module({
  imports: [
    MulterModule.registerAsync({
      useClass: MulterConfig,
    }),
  ],
  controllers: [PetraController],
  providers: [PetraService, PrismaService],
})
export class PetraModule {}
