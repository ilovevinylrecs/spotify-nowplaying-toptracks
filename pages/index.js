import React, { useState, useEffect } from 'react';

export default function Home() {
  const [trackPlaying, settrackPlaying] = useState([])

  useEffect(() => {
    async function fetchTrack() {
      const data = await fetch('api/spotify')
      settrackPlaying(await data.json())
    }
    fetchTrack();
  }, [])

  if (trackPlaying.length === 0) return 'Loading Spotify data.'

  console.log(trackPlaying);

  return (
    <div className="page">
      <h1>NOW PLAYING</h1>
      <img src={trackPlaying.albumImageUrl} /><br />
      <div className="artist">artist: {trackPlaying.artist}</div>
      <div className="title">title: {trackPlaying.title}</div>
      <div className="album">album: {trackPlaying.album}</div>
      <style jsx>{`
        .page {
          @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,400;1,400&display=swap');
          font-family: 'Josefin Sans', sans-serif;
          padding: 1rem;
          margin: 1rem;
        }
        h1 {
          margin: 1rem 0rem 1rem 0rem;
        }
        img {
          width: 100%;
          max-width: 60rem;
        }
        .artist {
          font-size: 1.5rem;
          margin: 1rem 0rem 1rem 0rem;
        }
        .title {
          font-size: 1.5rem;
          margin: 1rem 0rem 1rem 0rem;
        }
        .album {
          font-size: 1.5rem;
          margin: 1rem 0rem 1rem 0rem;
        }
      `}</style>
    </div >
  )
}
