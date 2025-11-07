import { QueryClient } from "@tanstack/react-query";

async function handleRequest(
  url: string,
  method: string,
  body?: unknown,
): Promise<Response> {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const options: RequestInit = {
    method,
    headers,
    credentials: "same-origin",
    body: body ? JSON.stringify(body) : undefined,
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
}

export async function apiRequest(
  url: string,
  method: string,
  body?: unknown,
): Promise<any> {
  const response = await handleRequest(url, method, body);
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }
  return response.text();
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const response = await handleRequest(queryKey[0] as string, "GET");
        return response.json();
      },
      staleTime: 1000 * 60 * 5,
      retry: false,
    },
  },
});
