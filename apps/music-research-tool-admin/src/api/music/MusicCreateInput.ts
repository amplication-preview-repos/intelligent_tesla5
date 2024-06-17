import { RecommendationCreateNestedManyWithoutMusicItemsInput } from "./RecommendationCreateNestedManyWithoutMusicItemsInput";

export type MusicCreateInput = {
  artist?: string | null;
  duration?: number | null;
  genre?: "Option1" | null;
  recommendations?: RecommendationCreateNestedManyWithoutMusicItemsInput;
  releaseDate?: Date | null;
  title?: string | null;
};
