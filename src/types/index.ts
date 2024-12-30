import type { components, paths } from "./generated";

export type UserParams = paths["/users/{id}"]["get"]["parameters"]["path"];
export type User = components["schemas"]["User"];
