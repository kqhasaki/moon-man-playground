export interface PaginatedResult<T> {
  success: boolean;
  count: number;
  total: number;
  data: T[];
}

export const BASE_URL = "https://eldenring.fanapis.com/api/";
