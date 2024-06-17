import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecommendationListRelationFilter } from "../recommendation/RecommendationListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MusicWhereInput = {
  artist?: StringNullableFilter;
  duration?: IntNullableFilter;
  genre?: "Option1";
  id?: StringFilter;
  recommendations?: RecommendationListRelationFilter;
  releaseDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
