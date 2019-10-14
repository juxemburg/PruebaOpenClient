import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http-client.service';
import {
  PokemonShortInfoViewModel,
  PokemonInfoViewModel,
} from '../models/pokemon.models';
import { HttpDefferedResult } from 'src/app/shared/models/shared.models';

@Injectable()
export class PokemonResourceService {
  private _uri = 'Pokemon';

  constructor(private _httpService: HttpClientService) {}

  public getPokemonShortInfoList(): HttpDefferedResult<
    PokemonShortInfoViewModel[]
  > {
    return this._httpService.getDeffered(`${this._uri}/shortinfo`);
  }
  public getPokemonInfo(
    pokemonId: number
  ): HttpDefferedResult<PokemonInfoViewModel> {
    return this._httpService.getDeffered(`${this._uri}/${pokemonId}`);
  }
}
