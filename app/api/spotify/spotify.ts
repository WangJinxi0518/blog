// 这段代码是用于与Spotify API进行交互的工具函数集合

// 定义Spotify API的各个端点URL
const SPOTIFY_TOKEN_API =
    `https://accounts.spotify.com/api/token`  // 用于获取访问令牌的API
const SPOTIFY_NOW_PLAYING_API =
    `https://api.spotify.com/v1/me/player/currently-playing`  // 获取当前播放歌曲的API
const SPOTIFY_TOP_TRACKS_API =
    `https://api.spotify.com/v1/me/top/tracks`  // 获取用户最常听的歌曲的API

// 从环境变量中获取Spotify应用的凭证
let {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token = '',
} = process.env

// 将client_id和client_secret进行Base64编码,用于Basic认证
let basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

// 获取访问令牌的函数
async function getAccessToken() {
  let response = await fetch(SPOTIFY_TOKEN_API, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    cache: 'no-store',
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

// 获取当前正在播放的歌曲信息
export async function getNowPlaying() {
  let { access_token } = await getAccessToken()
  let url = new URL(SPOTIFY_NOW_PLAYING_API)
  url.searchParams.append('additional_types', 'track,episode')

  return fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: 'no-store',
  })
}

// 获取用户最常听的歌曲列表
export async function getTopTracks() {
  let { access_token } = await getAccessToken()

  return fetch(SPOTIFY_TOP_TRACKS_API, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
