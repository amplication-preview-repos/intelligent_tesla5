import { Module } from "@nestjs/common";
import { MusicModuleBase } from "./base/music.module.base";
import { MusicService } from "./music.service";
import { MusicController } from "./music.controller";
import { MusicResolver } from "./music.resolver";

@Module({
  imports: [MusicModuleBase],
  controllers: [MusicController],
  providers: [MusicService, MusicResolver],
  exports: [MusicService],
})
export class MusicModule {}
