import { Module } from "@nestjs/common";
import { RecommendationModuleBase } from "./base/recommendation.module.base";
import { RecommendationService } from "./recommendation.service";
import { RecommendationController } from "./recommendation.controller";
import { RecommendationResolver } from "./recommendation.resolver";

@Module({
  imports: [RecommendationModuleBase],
  controllers: [RecommendationController],
  providers: [RecommendationService, RecommendationResolver],
  exports: [RecommendationService],
})
export class RecommendationModule {}
