import { SortOrder } from "../../util/SortOrder";

export type RecommendationOrderByInput = {
  briefId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  musicId?: SortOrder;
  recommendedAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
