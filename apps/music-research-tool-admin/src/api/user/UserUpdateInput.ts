import { RecommendationUpdateManyWithoutUsersInput } from "./RecommendationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  recommendations?: RecommendationUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
