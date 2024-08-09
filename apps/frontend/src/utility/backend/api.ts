import { type ApiRoute } from "@apps/backend";
import { hc } from "hono/client";

const client = hc<ApiRoute>("/");

export const api = client.api;

