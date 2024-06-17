import { MusicWhereInput } from "./MusicWhereInput";
import { MusicOrderByInput } from "./MusicOrderByInput";

export type MusicFindManyArgs = {
  where?: MusicWhereInput;
  orderBy?: Array<MusicOrderByInput>;
  skip?: number;
  take?: number;
};
