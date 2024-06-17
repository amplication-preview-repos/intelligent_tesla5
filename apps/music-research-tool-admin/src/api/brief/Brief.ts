import { Recommendation } from "../recommendation/Recommendation";

export type Brief = {
  content: string | null;
  createdAt: Date;
  id: string;
  recommendations?: Array<Recommendation>;
  updatedAt: Date;
};
