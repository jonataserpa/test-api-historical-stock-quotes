import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';
import { CreatePetraDto } from '../dto/create-petra.dto';
import { PrismaService } from 'src/config/database/PrismaService';
import { IQuotes } from '../interfaces';
import * as testImport from 'readline';

@Injectable()
export class PetraService {
  constructor(private prisma: PrismaService) {}

  /**
   * Upload file quotes
   * @param file
   * @returns
   */
  async upload(file: any) {
    const { buffer } = file;
    const nameFile = file.originalname.split('.')[0];
    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    const quoteLine = await testImport.createInterface({
      input: readableFile,
    });

    const quotes: IQuotes[] = [];

    for await (const line of quoteLine) {
      const quoteLineSplit = line.split(',');
      quotes.push({
        open_price: quoteLineSplit[1],
        highest_price: quoteLineSplit[2],
        lowest_price: quoteLineSplit[3],
        volume: quoteLineSplit[6],
        close_price: quoteLineSplit[4],
        date: quoteLineSplit[0],
        ticker: nameFile,
      });
    }

    for await (const quote of quotes) {
      await this.create(quote);
    }

    return 'File Imported stock Quotes with success';
  }

  /**
   * Create a new quote
   * @param createPetraDto
   * @returns
   */
  async create(createPetraDto: CreatePetraDto) {
    return this.prisma.quote.create({
      data: createPetraDto,
    });
  }

  /**
   * Filter by year and ticker with pagination
   * @param params
   * @returns
   */
  async findAll(params: {
    skip?: number;
    take?: number;
    year?: string;
    ticker?: string;
  }) {
    const { skip, take, year, ticker } = params;
    let data;

    if (isNaN(skip)) {
      data = await this.prisma.quote.findMany();
    } else {
      data = await this.prisma.quote.findMany({
        skip,
        take,
        select: {
          open_price: true,
          highest_price: true,
          lowest_price: true,
          volume: true,
          close_price: true,
        },
        where: {
          date: {
            lte: year
              .split('-')
              .pop()
              .concat('-')
              .concat('12')
              .concat('-')
              .concat('30'),
            gte: year,
          },
          AND: {
            ticker: ticker,
          },
        },
        orderBy: {
          id: 'desc',
        },
      });
    }

    return data;
  }

  /**
   * Filter by one quote
   * @param id
   * @returns
   */
  findOne(id: number) {
    return this.prisma.quote.findUnique({
      where: { id },
    });
  }
}
