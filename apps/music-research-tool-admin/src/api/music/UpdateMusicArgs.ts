import { MusicWhereUniqueInput } from "./MusicWhereUniqueInput";
import { MusicUpdateInput } from "./MusicUpdateInput";

export type UpdateMusicArgs = {
  where: MusicWhereUniqueInput;
  data: MusicUpdateInput;
};
