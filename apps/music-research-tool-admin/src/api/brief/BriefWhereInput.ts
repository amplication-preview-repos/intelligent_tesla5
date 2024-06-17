import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";

export type BriefWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  recommendations?: RecommendationListRelationFilter;
};
