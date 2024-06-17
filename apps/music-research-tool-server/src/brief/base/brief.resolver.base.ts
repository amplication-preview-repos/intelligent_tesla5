/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Brief } from "./Brief";
import { BriefCountArgs } from "./BriefCountArgs";
import { BriefFindManyArgs } from "./BriefFindManyArgs";
import { BriefFindUniqueArgs } from "./BriefFindUniqueArgs";
import { CreateBriefArgs } from "./CreateBriefArgs";
import { UpdateBriefArgs } from "./UpdateBriefArgs";
import { DeleteBriefArgs } from "./DeleteBriefArgs";
import { RecommendationFindManyArgs } from "../../recommendation/base/RecommendationFindManyArgs";
import { Recommendation } from "../../recommendation/base/Recommendation";
import { BriefService } from "../brief.service";
@graphql.Resolver(() => Brief)
export class BriefResolverBase {
  constructor(protected readonly service: BriefService) {}

  async _briefsMeta(
    @graphql.Args() args: BriefCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Brief])
  async briefs(@graphql.Args() args: BriefFindManyArgs): Promise<Brief[]> {
    return this.service.briefs(args);
  }

  @graphql.Query(() => Brief, { nullable: true })
  async brief(
    @graphql.Args() args: BriefFindUniqueArgs
  ): Promise<Brief | null> {
    const result = await this.service.brief(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Brief)
  async createBrief(@graphql.Args() args: CreateBriefArgs): Promise<Brief> {
    return await this.service.createBrief({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Brief)
  async updateBrief(
    @graphql.Args() args: UpdateBriefArgs
  ): Promise<Brief | null> {
    try {
      return await this.service.updateBrief({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Brief)
  async deleteBrief(
    @graphql.Args() args: DeleteBriefArgs
  ): Promise<Brief | null> {
    try {
      return await this.service.deleteBrief(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Recommendation], { name: "recommendations" })
  async findRecommendations(
    @graphql.Parent() parent: Brief,
    @graphql.Args() args: RecommendationFindManyArgs
  ): Promise<Recommendation[]> {
    const results = await this.service.findRecommendations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.Query(() => String)
  async SubmitBrief(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SubmitBrief(args);
  }

  @graphql.Mutation(() => Brief)
  async SubmitBriefDetails(
    @graphql.Args()
    args: CreateBriefArgs
  ): Promise<Brief> {
    return this.service.SubmitBriefDetails(args);
  }

  @graphql.Query(() => String)
  async SubmitMusicBrief(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SubmitMusicBrief(args);
  }
}