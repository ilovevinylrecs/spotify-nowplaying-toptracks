//auth and getting access token
import querystring from 'querystring';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });

    console.log(response);

    return response.json();
};

const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played`;

export const getRecentlyPlayed = async () => {
    const { access_token } = await getAccessToken();

    return fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export default async (_, res) => {
    const response = await getRecentlyPlayed();

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json();
    }

    const items = await response.json();

    console.log(items);
  
    // const tracks = items.slice(0, 10).map((track) => ({
    //   artist: track.artists.map((_artist) => _artist.name).join(', '),
    //   songUrl: track.external_urls.spotify,
    //   title: track.name
    // }));
  
    return res.status(200).json(items);
};