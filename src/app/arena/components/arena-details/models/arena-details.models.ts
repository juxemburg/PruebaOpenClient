export interface PokemonArenaDetailViewModel {
  fightCount: number;
  arenaElapsedTime: number;
  initialArenaPosition: ArenaPosition[];
  finalArenaPosition: ArenaPosition[];
  battleRecords: BattleRecord[];
}

export interface BattleRecord {
  order: number;
  challengerPokemon: ArenaPosition;
  challengedPokemon: ArenaPosition;
}

export interface ArenaPosition {
  dexNum: number;
  name: string;
}
