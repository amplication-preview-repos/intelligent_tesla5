/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BriefWhereUniqueInput } from "../../brief/base/BriefWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { MusicWhereUniqueInput } from "../../music/base/MusicWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class RecommendationCreateInput {
  @ApiProperty({
    required: false,
    type: () => BriefWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BriefWhereUniqueInput)
  @IsOptional()
  @Field(() => BriefWhereUniqueInput, {
    nullable: true,
  })
  brief?: BriefWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => MusicWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MusicWhereUniqueInput)
  @IsOptional()
  @Field(() => MusicWhereUniqueInput, {
    nullable: true,
  })
  music?: MusicWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  recommendedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { RecommendationCreateInput as RecommendationCreateInput };