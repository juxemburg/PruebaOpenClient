import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/shared/services/http-client.service';
import { HttpDefferedResult } from 'src/app/shared/models/shared.models';
import {
  PokemonArenaDetailViewModel,
  PokemonArenaShortInfoViewModel,
} from '../components/arena-details/models/arena-details.models';

@Injectable({
  providedIn: 'root',
})
export class ArenaResourceService {
  private _uri = 'PokemonArena';

  constructor(private _http: HttpClientService) {}

  public createPokemonArena(pkmnNames: string[]): HttpDefferedResult<number> {
    return this._http.postDeffered(`${this._uri}`, pkmnNames);
  }

  public createRandomPokemonArena(
    pkmnCount: number
  ): HttpDefferedResult<number> {
    return this._http.postDeffered(`${this._uri}/Random`, pkmnCount);
  }

  public getPokemonArenaList(): HttpDefferedResult<
    PokemonArenaShortInfoViewModel[]
  > {
    return this._http.getDeffered(`${this._uri}`);
  }

  public getPokemonArenaDetail(
    id: number
  ): HttpDefferedResult<PokemonArenaDetailViewModel> {
    return this._http.getDeffered(`${this._uri}/${id}`);
  }
}
