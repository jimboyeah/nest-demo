import  { IsString, IsInt, validate, validateOrReject } from 'class-validator';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateCatDto {

  @IsString()
  readonly name: string;

  @IsInt({message: "It must be number for age!"})
  readonly age: number;

  @IsString()
  readonly breed: string;
}

@Injectable()
export class UpdateCatDto {
  constructor(){
    this.log();
  }
  log(){
    console.log("UpdateCatDto...");
  }
}

@Injectable()
export class ListAllEntities {
  constructor(){
    this.log();
  }
  log(){
    console.log("ListAllEntities...");
  }
  limit = 10
}
