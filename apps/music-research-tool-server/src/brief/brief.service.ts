import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BriefServiceBase } from "./base/brief.service.base";

@Injectable()
export class BriefService extends BriefServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
