import { BriefWhereUniqueInput } from "../brief/BriefWhereUniqueInput";
import { MusicWhereUniqueInput } from "../music/MusicWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecommendationUpdateInput = {
  brief?: BriefWhereUniqueInput | null;
  music?: MusicWhereUniqueInput | null;
  recommendedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
