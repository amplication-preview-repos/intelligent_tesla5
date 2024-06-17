import { RecommendationUpdateManyWithoutMusicItemsInput } from "./RecommendationUpdateManyWithoutMusicItemsInput";

export type MusicUpdateInput = {
  artist?: string | null;
  duration?: number | null;
  genre?: "Option1" | null;
  recommendations?: RecommendationUpdateManyWithoutMusicItemsInput;
  releaseDate?: Date | null;
  title?: string | null;
};
