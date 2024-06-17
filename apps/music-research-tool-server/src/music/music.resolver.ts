import * as graphql from "@nestjs/graphql";
import { MusicResolverBase } from "./base/music.resolver.base";
import { Music } from "./base/Music";
import { MusicService } from "./music.service";

@graphql.Resolver(() => Music)
export class MusicResolver extends MusicResolverBase {
  constructor(protected readonly service: MusicService) {
    super(service);
  }
}
