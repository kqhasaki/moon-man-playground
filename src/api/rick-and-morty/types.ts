export interface PaginatedResult<T> {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: T[];
}

export const BASE_URL = "https://rickandmortyapi.com/api/";
