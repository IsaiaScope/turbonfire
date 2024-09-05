import { api } from '@api-client';
import { queryOptions } from '@tanstack/react-query';

async function getCurrentUser() {
  const res = await api.kinde.me.$get();
  if (!res.ok) {
    throw new Error("server error");
  }
  const data = await res.json();
  return data;
}

export const getCurrentUserQuery = queryOptions({
  queryKey: ["get-current-user"],
  queryFn: getCurrentUser,
  staleTime: Infinity,
});