import React, { useState, useEffect } from 'react';

export default function NowPlayingModule() {
  const [nowPlaying, setnowPlaying] = useState([])

  useEffect(() => {
    async function fetchTrack() {
      const data = await fetch('api/now-playing')
      setnowPlaying(await data.json())
    }
    fetchTrack();
  }, [])

  if (nowPlaying.length === 0) return 'not currently listening'

  return (
    <center>
    <div className="container">
            <div className="column">
                <img src={nowPlaying.albumImageUrl} />
            </div>
            <div className="column">
                <div className="text">
                    <b>NOW PLAYING</b><br />
                    <b>artist:</b> {nowPlaying.artist}<br />
                    <b>title:</b> {nowPlaying.title}<br />
                    <b>album:</b> {nowPlaying.album}
                </div>
            </div>
            <div className="column">
            </div>
        
            <style jsx>{`
            .container {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid silver;
            border-radius: .5rem;
            width: 75%;
            max-width: 40rem;
            }  
            .column {
            display: flex;
            }
            img {
            max-width: 5rem;
            margin: .5rem;
            }
            .text {
            font-family: monospace;
            font-size: .75rem;
            text-align: left;
            justify-content: center;
            align-items: center;
            margin: .5rem;
            }
            `}</style>
    </div>
    </center>
  )
}