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
import { Type } from "class-transformer";

@ArgsType()
class BriefCountArgs {
  @ApiProperty({
    required: false,
    type: () => BriefWhereInput,
  })
  @Field(() => BriefWhereInput, { nullable: true })
  @Type(() => BriefWhereInput)
  where?: BriefWhereInput;
}

export { BriefCountArgs as BriefCountArgs };
