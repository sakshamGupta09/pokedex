export interface IGetPokemonResponse {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}

export interface IPokemon {
  name: string;
  id: number;
}
