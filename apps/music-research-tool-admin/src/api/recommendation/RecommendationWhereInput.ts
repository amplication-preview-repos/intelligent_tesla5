import { BriefWhereUniqueInput } from "../brief/BriefWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MusicWhereUniqueInput } from "../music/MusicWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecommendationWhereInput = {
  brief?: BriefWhereUniqueInput;
  id?: StringFilter;
  music?: MusicWhereUniqueInput;
  recommendedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
