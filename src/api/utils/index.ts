import axios, { AxiosResponse } from "axios";

export async function get(
  url: string
): Promise<AxiosResponse<unknown, unknown>> {
  return axios.get(url);
}

export async function post(
  url: string,
  data: unknown
): Promise<AxiosResponse<unknown, unknown>> {
  return axios.post(url, data);
}

export function urlcat({
  baseURL,
  relativeURL = "",
  queryParams,
}: {
  baseURL: string;
  relativeURL?: string;
  queryParams?: { [k: string]: string | number };
}): string {
  const url = new URL(relativeURL, baseURL);
  if (queryParams != undefined) {
    const queryParamsStringified: Record<string, string> = {};
    for (const [key, value] of Object.entries(queryParams)) {
      queryParamsStringified[key] = value.toString();
    }

    url.search = new URLSearchParams(queryParamsStringified).toString();
  }

  return url.href;
}
