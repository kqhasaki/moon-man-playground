import { get, urlcat } from "../utils";
import { BASE_URL, PaginatedResult } from "./types";

export interface Boss {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  drops: string[];
  healthPoints: string;
}

export async function getPaginatedBosses(
  page: number,
  pageSize: number = 20
): Promise<PaginatedResult<Boss>> {
  return (
    await get(
      urlcat({
        baseURL: BASE_URL,
        relativeURL: "bosses",
        queryParams: {
          page,
          limit: pageSize,
        },
      })
    )
  ).data as PaginatedResult<Boss>;
}
