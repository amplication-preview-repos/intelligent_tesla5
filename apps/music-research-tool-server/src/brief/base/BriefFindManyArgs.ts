/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BriefWhereInput } from "./BriefWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BriefOrderByInput } from "./BriefOrderByInput";

@ArgsType()
class BriefFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BriefWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BriefWhereInput, { nullable: true })
  @Type(() => BriefWhereInput)
  where?: BriefWhereInput;

  @ApiProperty({
    required: false,
    type: [BriefOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BriefOrderByInput], { nullable: true })
  @Type(() => BriefOrderByInput)
  orderBy?: Array<BriefOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BriefFindManyArgs as BriefFindManyArgs };
