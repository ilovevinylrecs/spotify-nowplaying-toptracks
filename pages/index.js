import React, { useState, useEffect } from 'react';

export default function Home() {
  const [nowPlaying, setnowPlaying] = useState([])
  const [topTen, settopTen] = useState([])

  useEffect(() => {
    async function fetchTrack() {
      const data = await fetch('api/now-playing')
      setnowPlaying(await data.json())
    }
    fetchTrack();
  }, [])

  useEffect(() => {
    async function fetchtopTen() {
      const data = await fetch('api/top-tracks')
      settopTen(await data.json())
    }
    fetchtopTen();
  }, [])

  console.log(nowPlaying);

  if (nowPlaying.length === 0) return 'not currently listening'

  console.log(topTen);

  return (

    <div className="page">
      <div className="now_playing">
        NOW PLAYING
      </div>
      <img src={nowPlaying.albumImageUrl} /><br />
        artist: 
        <div className="text">{nowPlaying.artist}</div>
        title: 
        <div className="text">{nowPlaying.title}</div>
        album: 
        <div className="text">{nowPlaying.album}</div>
      
      <div className="top_tracks">Top Tracks</div>
     

      <style jsx>{`
        .page {
          font-family: monospace;
          padding: 1rem;
          margin: 1rem 1rem 0rem 2rem
        }
        img {
          width: 75%;
          max-width: 40rem;
          margin: 0rem 0rem 1rem 0rem
        }
        .now_playing {
          font-size: 2rem;
          font-weight: bold;
          margin: 2rem 0rem 2rem 0rem;
        }
        .top_tracks {
          font-size: 2rem;
          font-weight: bold;
          margin: 3rem 0rem 2rem 0rem;
        }
        .text {
          font-size: 1rem;
          font-weight: bold;
          margin: 0.5rem 0rem 1rem 0rem;
        }
      `}</style>
      
    </div>
  )
}
