import { get, urlcat } from "../utils";
import { PaginatedResult, BASE_URL } from "./types";

export interface Character {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export async function getPaginatedCharacters(
  page: number = 1
): Promise<PaginatedResult<Character>> {
  return (
    await get(
      urlcat({
        baseURL: BASE_URL,
        relativeURL: "character",
        queryParams: {
          page,
        },
      })
    )
  ).data as PaginatedResult<Character>;
}
