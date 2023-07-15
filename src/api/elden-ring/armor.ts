import { get, urlcat } from "../utils";
import { BASE_URL, PaginatedResult } from "./types";

export interface Armor {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  weight: string;
  dmgNegation: {
    name: string;
    amount: number;
  }[];
  resistance: {
    name: string;
    amount: number;
  };
}

export async function getPaginatedArmors(
  page: number,
  pageSize: number = 20
): Promise<PaginatedResult<Armor>> {
  return (
    await get(
      urlcat({
        baseURL: BASE_URL,
        relativeURL: "armors",
        queryParams: {
          page,
          limit: pageSize,
        },
      })
    )
  ).data as PaginatedResult<Armor>;
}
