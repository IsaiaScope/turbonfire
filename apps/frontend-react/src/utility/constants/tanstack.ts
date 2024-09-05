import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const TANSTACK = {
  CLIENT: queryClient,
  KEYS: {
    GET_CURRENT_USER: "get-current-user",
  },
} as const;

export type TANSTACK_KEYS = (typeof TANSTACK)["KEYS"];
