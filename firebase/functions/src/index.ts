import * as functions from "firebase-functions";
import axios from "axios";
import {initializeApp} from "firebase-admin";

require('dotenv').config()
const app = initializeApp();
const firestore = app.firestore();

export const getSpotifyAccessToken = functions.https.onRequest(async (request, response) => {
  const {userId, spotifyCode, redirectUri} = request.params;
  const auth = new Buffer(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')
  const headers = {
    Authorization: `Basic ${auth}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  const params = {
    grant_type: "authorization_code",
    code: spotifyCode,
    redirect_uri: redirectUri
  };
  const config = {
    headers,
    params
  }
  const accessTokenResponse = await axios.get('https://accounts.spotify.com/api/token', config);
  if (accessTokenResponse.status !== 200) {
    response.send({success: false, message: "failed to generate access token"});
    return;
  }
  const written = await writeAccessToken(userId, 'spotify', accessTokenResponse.data.access_token);
  if (!written) {
    response.send({success: false, message: "failed to save access token"})
  }
  response.send({success: true});
});

const writeAccessToken = async (uid: string, type: string, token: string) => {
  const tokenRef = firestore.doc(`users/${uid}/tokens`);
  try {
    await tokenRef.set({type: token}, {merge: true});
  } catch (error) {
    return false;
  }
  return true;
};

export const refreshSpotifyAccessToken = functions.https.onRequest((request, response) => {
  response.send('not yet implemented');
});
