import {AuthRequestConfig, DiscoveryDocument, makeRedirectUri, ResponseType} from "expo-auth-session";

export interface OAuthConfig {
  discovery: DiscoveryDocument,
  config: AuthRequestConfig
}

export const spotifyConfig = (redirectUri: string): OAuthConfig => ({
  discovery: {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
  },
  config: {
    responseType: ResponseType.Code,
    clientId: 'a135513fa34343dbb12a8b69eae97885',
    redirectUri,
    scopes: ['user-top-read'],
  }
});
