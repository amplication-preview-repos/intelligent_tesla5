import { RecommendationCreateNestedManyWithoutBriefsInput } from "./RecommendationCreateNestedManyWithoutBriefsInput";

export type BriefCreateInput = {
  content?: string | null;
  recommendations?: RecommendationCreateNestedManyWithoutBriefsInput;
};
