import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BriefService } from "./brief.service";
import { BriefControllerBase } from "./base/brief.controller.base";

@swagger.ApiTags("briefs")
@common.Controller("briefs")
export class BriefController extends BriefControllerBase {
  constructor(protected readonly service: BriefService) {
    super(service);
  }
}
