import {fbFunctions} from "./index";
import {httpsCallable} from "firebase/functions";

export const getSpotifyAccessToken = async (uid: string, spotifyCode: string, redirectUri: string) => {
  const resp = await httpsCallable(fbFunctions, "getSpotifyAccessToken")({uid, spotifyCode, redirectUri});
  console.log(resp);
}
