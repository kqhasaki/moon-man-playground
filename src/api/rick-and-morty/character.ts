import { get } from "../utils";
import { PaginatedResult } from "./types";
import { BASE_URL } from "./types";
import { urlcat } from "../utils";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: object;
  location: object;
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
