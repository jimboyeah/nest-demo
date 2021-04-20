import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  log(){
    console.log("CatsService from nest g service cats")
  }
}
