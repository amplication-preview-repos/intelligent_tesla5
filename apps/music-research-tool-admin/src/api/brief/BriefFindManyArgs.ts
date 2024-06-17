import { BriefWhereInput } from "./BriefWhereInput";
import { BriefOrderByInput } from "./BriefOrderByInput";

export type BriefFindManyArgs = {
  where?: BriefWhereInput;
  orderBy?: Array<BriefOrderByInput>;
  skip?: number;
  take?: number;
};
