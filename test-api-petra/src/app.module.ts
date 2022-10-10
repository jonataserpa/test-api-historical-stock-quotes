import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './config/database/PrismaService';
import { PetraController } from './quotes/controllers/petra.controller';
import { PetraModule } from './quotes/petra.module';
import { PetraService } from './quotes/services/petra.service';

@Module({
  imports: [ConfigModule.forRoot(), PetraModule],
  controllers: [PetraController],
  providers: [PetraService, PrismaService],
})
export class AppModule {}
