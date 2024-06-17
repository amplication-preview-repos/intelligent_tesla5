import { Recommendation } from "../recommendation/Recommendation";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  recommendations?: Array<Recommendation>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
