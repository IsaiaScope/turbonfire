import {createKindeServerClient, GrantType} from "@kinde-oss/kinde-typescript-sdk";

// Client for authorization code flow
export const kindeClient = createKindeServerClient(GrantType.AUTHORIZATION_CODE, {
  authDomain: "https://<your_kinde_subdomain>.kinde.com",
  clientId: "<your_kinde_client_id>",
  clientSecret: "<your_kinde_client_secret>",
  redirectURL: "http://localhost:3000/callback",
  logoutRedirectURL: "http://localhost:3000"
});

// Client for client credentials flow
export const kindeApiClient = createKindeServerClient(GrantType.CLIENT_CREDENTIALS, {
  authDomain: "https://<your_kinde_subdomain>.kinde.com",
  clientId: "<your_kinde_client_id>",
  clientSecret: "<your_kinde_client_secret>",
  logoutRedirectURL: "http://localhost:3000"
});