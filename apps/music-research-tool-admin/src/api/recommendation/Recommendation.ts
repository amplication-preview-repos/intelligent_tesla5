import { Brief } from "../brief/Brief";
import { Music } from "../music/Music";
import { User } from "../user/User";

export type Recommendation = {
  brief?: Brief | null;
  createdAt: Date;
  id: string;
  music?: Music | null;
  recommendedAt: Date | null;
  updatedAt: Date;
  user?: User | null;
};
