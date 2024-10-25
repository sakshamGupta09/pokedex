export interface IPokemon {
  name: string;
  url: string;
}

export interface IGetPokemonResponse {
  count: number;
  results: IPokemon[];
}
