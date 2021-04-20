import { Module } from '@nestjs/common';
import { LibModulesService } from './lib-modules.service';

@Module({
  providers: [LibModulesService],
  exports: [LibModulesService],
})
export class LibModulesModule {}
