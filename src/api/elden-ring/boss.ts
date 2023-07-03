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

export async function getPaginatedBosses({
  page = 1,
  limit = 20,
}: {
  page?: number;
  limit?: number;
}): Promise<PaginatedResult<Boss>> {
  return (
    await get(
      urlcat({
        baseURL: BASE_URL,
        relativeURL: "bosses",
        queryParams: {
          page,
          limit,
        },
      })
    )
  ).data as PaginatedResult<Boss>;
}
