const BASE_URL = "https://39085646937f8a29.mokky.dev";

class ApiError extends Error {
  constructor(public response: Response) {
    super("ApiError:" + response.status);
  }
}

export const jsonApiInstance = async <T>(
  url: string,
  init?: RequestInit & { json?: unknown }
) => {
  let headers = init?.headers ?? {};

  if (init?.json) {
    headers = {
        'Content-Type': 'application/json',
        ...headers
    };

    init.body = JSON.stringify(init.json)
  }

  const result = await fetch(`${BASE_URL}${url}`, {
    ...init,
    headers
  });

  if (!result.ok) {
    throw new ApiError(result);
  }

  const data = (await result.json()) as Promise<T>;

  return data;
};