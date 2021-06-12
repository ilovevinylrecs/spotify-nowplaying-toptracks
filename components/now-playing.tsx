import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function NowPlayingModule() {
  const [nowPlaying, setnowPlaying] = useState<any>([])

  useEffect(() => {
    async function fetchTrack() {
      const data = await fetch('api/now-playing')
      setnowPlaying(await data.json())
    }
    fetchTrack();
  }, [])

  return (
    <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
      { nowPlaying.isPlaying === false 
        ? <div className="container">
            <div className="column">
              <Image src="/vinyl_record.png" alt="vinyl record" width="50" height="50" />
            </div>
            <div className="column">
                <div className="text">
                    <b>CURRENTLY LISTENING <br />
                    TO VINYL</b>
                </div>
            </div>

            <style jsx>{`
            .container {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid silver;
            border-radius: .5rem;
            max-width: 20rem;
            }  
            .column {
            display: flex;
            margin: .5rem 1rem .5rem .5rem;
            }
            .image-column {
            display: flex;
            margin: 1rem 2rem 1rem 1rem;
            }
            img {
            max-width: 5rem;
            border-radius: .5rem;
            }
            .text {
            font-family: monospace;
            font-size: .75rem;
            text-align: left;
            justify-content: center;
            align-items: center;
            margin: 0rem 2rem 0rem 0rem;
            }
            `}</style>
          </div>
        :<div className="container">
            <div className="column">
                <img src={nowPlaying.albumImageUrl} />
            </div>
            <div className="column">
                <div className="text">
                    <b>NOW PLAYING</b><br />
                    artist: <b>{nowPlaying.artist}</b><br />
                    title: <b>{nowPlaying.title}</b><br />
                    album: <b>{nowPlaying.album}</b>
                </div>
            </div>
            <div className="image-column">
              <Image src="/spotify_icon.png" alt="Spotify Logo" width="50" height="50" />
            </div>
              
            <style jsx>{`
            .container {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid silver;
            border-radius: .5rem;
            max-width: 25rem;
            }  
            .column {
            display: flex;
            margin: .5rem 1rem .5rem .5rem;
            }
            .image-column {
            display: flex;
            margin: 0rem 2rem 0rem 1rem;
            }
            img {
            max-width: 5rem;
            border-radius: .5rem;
            }
            .text {
            font-family: monospace;
            font-size: .75rem;
            text-align: left;
            line-height: 1.4;
            justify-content: center;
            align-items: center;
            margin: 0rem 2rem 0rem 0rem;
            }
            `}</style>
        </div>
      }
    </div>
  )
}