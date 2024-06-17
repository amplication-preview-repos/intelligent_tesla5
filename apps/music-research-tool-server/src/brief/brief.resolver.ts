import * as graphql from "@nestjs/graphql";
import { BriefResolverBase } from "./base/brief.resolver.base";
import { Brief } from "./base/Brief";
import { BriefService } from "./brief.service";

@graphql.Resolver(() => Brief)
export class BriefResolver extends BriefResolverBase {
  constructor(protected readonly service: BriefService) {
    super(service);
  }
}
