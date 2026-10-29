import { QueryClient } from "@tanstack/react-query";

let client: QueryClient | null = null;

export default function getQueryClient() {
  if (!client) {
    client = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,   // не викликає Date.now()
          gcTime: Infinity,      // не викликає Date.now()
          retry: false,
          refetchOnWindowFocus: false,
        },
      },
    });
  }

  return client;
}
