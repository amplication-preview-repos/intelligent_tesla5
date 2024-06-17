import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MusicServiceBase } from "./base/music.service.base";

@Injectable()
export class MusicService extends MusicServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
