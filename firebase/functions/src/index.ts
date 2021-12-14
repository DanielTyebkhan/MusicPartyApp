import * as functions from "firebase-functions";
import axios from "axios";

require('dotenv').config()

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
  // TODO: store access token in db
  if (accessTokenResponse.status === 200)
    response.send({success: true});
  else
    response.send({success: false})
});

export const refreshSpotifyAccessToken = functions.https.onRequest((request, response) => {
  response.send('not yet implemented');
});
