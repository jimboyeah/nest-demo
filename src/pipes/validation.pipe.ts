import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import {validate, validateOrReject} from 'class-validator';
import {plainToClass} from 'class-transformer';
import {CreateCatDto} from '../cats/dto';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: CreateCatDto, metadata: ArgumentMetadata) {
    console.log("validation.pipe.ts...", value, metadata)

    let ob = plainToClass(CreateCatDto, value);
    await validate(ob).then(errors => {
      // errors is an array of validation errors
      if (errors.length > 0) {
        console.log('❌ validation failed. errors: ', errors);
        throw new BadRequestException(`Validation failed: ${JSON.stringify(value)}`);
      } else {
        console.log('⭕ validation succeed');
      }
    });

    await validateOrReject(ob).catch(errors => {
      console.log('Promise rejected (validation failed). Errors: ', errors);
    });

    return ob;
  }
}
