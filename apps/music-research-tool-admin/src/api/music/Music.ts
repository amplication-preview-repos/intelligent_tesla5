import { Recommendation } from "../recommendation/Recommendation";

export type Music = {
  artist: string | null;
  createdAt: Date;
  duration: number | null;
  genre?: "Option1" | null;
  id: string;
  recommendations?: Array<Recommendation>;
  releaseDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
