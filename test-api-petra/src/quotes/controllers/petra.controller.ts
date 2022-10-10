import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePetraDto } from '../dto/create-petra.dto';
import { PetraService } from '../services/petra.service';

@Controller('petra')
export class PetraController {
  constructor(private readonly petraService: PetraService) {}

  @Post()
  create(@Body() createPetraDto: CreatePetraDto) {
    return this.petraService.create(createPetraDto);
  }

  @Get()
  findAll(
    @Query('skip') skip: string,
    @Query('take') take: string,
    @Query('year') year: string,
    @Query('ticker') ticker: string,
  ) {
    return this.petraService.findAll({
      skip: Number(skip),
      take: Number(take),
      year: year,
      ticker: ticker,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petraService.findOne(+id);
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadSingle(@UploadedFile() file) {
    return this.petraService.upload(file);
  }
}
