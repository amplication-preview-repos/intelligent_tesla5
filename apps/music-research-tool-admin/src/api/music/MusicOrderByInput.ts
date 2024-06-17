import { SortOrder } from "../../util/SortOrder";

export type MusicOrderByInput = {
  artist?: SortOrder;
  createdAt?: SortOrder;
  duration?: SortOrder;
  genre?: SortOrder;
  id?: SortOrder;
  releaseDate?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
