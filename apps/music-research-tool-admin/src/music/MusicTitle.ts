import { Music as TMusic } from "../api/music/Music";

export const MUSIC_TITLE_FIELD = "title";

export const MusicTitle = (record: TMusic): string => {
  return record.title?.toString() || String(record.id);
};
