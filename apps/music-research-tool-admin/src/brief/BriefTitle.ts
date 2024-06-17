import { Brief as TBrief } from "../api/brief/Brief";

export const BRIEF_TITLE_FIELD = "id";

export const BriefTitle = (record: TBrief): string => {
  return record.id?.toString() || String(record.id);
};
