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
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { MusicWhereUniqueInput } from "../../music/base/MusicWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class RecommendationWhereInput {
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
  brief?: BriefWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
  music?: MusicWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  recommendedAt?: DateTimeNullableFilter;

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
  user?: UserWhereUniqueInput;
}

export { RecommendationWhereInput as RecommendationWhereInput };