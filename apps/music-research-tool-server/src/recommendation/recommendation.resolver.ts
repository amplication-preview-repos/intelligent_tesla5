import * as graphql from "@nestjs/graphql";
import { RecommendationResolverBase } from "./base/recommendation.resolver.base";
import { Recommendation } from "./base/Recommendation";
import { RecommendationService } from "./recommendation.service";

@graphql.Resolver(() => Recommendation)
export class RecommendationResolver extends RecommendationResolverBase {
  constructor(protected readonly service: RecommendationService) {
    super(service);
  }
}
