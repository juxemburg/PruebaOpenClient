export interface PokemonShortInfoViewModel {
  dexNum: number;
  name: string;
}

export interface PokemonInfoViewModel {
  id: number;
  name: string;
  types: string[];
  abilities: string[];
  height: number;
  weight: number;
  sprites: Sprites;
  stats: Stats;
}

export interface Sprites {
  default: Default;
  shiny: Default;
}

export interface Default {
  front: string;
  back: string;
}

export interface Stats {
  speed: number;
  'special-defense': number;
  'special-attack': number;
  defense: number;
  attack: number;
  hp: number;
}
