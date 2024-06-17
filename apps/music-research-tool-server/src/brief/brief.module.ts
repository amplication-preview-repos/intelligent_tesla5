import { Module } from "@nestjs/common";
import { BriefModuleBase } from "./base/brief.module.base";
import { BriefService } from "./brief.service";
import { BriefController } from "./brief.controller";
import { BriefResolver } from "./brief.resolver";

@Module({
  imports: [BriefModuleBase],
  controllers: [BriefController],
  providers: [BriefService, BriefResolver],
  exports: [BriefService],
})
export class BriefModule {}
