import constants from 'src/config/constants';
import { IsString, Length } from 'class-validator';

export class CreatePetraDto {
  @Length(constants.STRING_MIN, constants.STRING_MAX)
  @IsString()
  open_price;

  @Length(constants.STRING_MIN, constants.STRING_MAX)
  @IsString()
  highest_price;

  @Length(constants.STRING_MIN, constants.STRING_MAX)
  @IsString()
  lowest_price;

  @Length(constants.STRING_MIN, constants.STRING_MAX)
  @IsString()
  volume;

  @Length(constants.STRING_MIN, constants.STRING_MAX)
  @IsString()
  close_price;

  @Length(constants.STRING_MIN, constants.STRING_MAX)
  @IsString()
  date;

  @Length(constants.STRING_MIN, constants.STRING_MAX)
  @IsString()
  ticker;
}
