import { get, urlcat } from "../utils";
import { BASE_URL, PaginatedResult } from "./types";

export interface Weapon {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  weight: number;
  attack: {
    name: string;
    amount: number;
  }[];
  defence: {
    name: string;
    amount: number;
  }[];
  requiredAttributes: {
    name: string;
    amount: number;
  }[];
  scalesWith: {
    name: string;
    scaling: string;
  }[];
}

export async function getPaginatedWeapons(
  page: number,
  pageSize: number = 20
): Promise<PaginatedResult<Weapon>> {
  return (
    await get(
      urlcat({
        baseURL: BASE_URL,
        relativeURL: "weapons",
        queryParams: {
          page,
          limit: pageSize,
        },
      })
    )
  ).data as PaginatedResult<Weapon>;
}
