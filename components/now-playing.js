import React, { useState, useEffect } from 'react'
import Image from 'next/image'


export default function NowPlayingModule() {
  const [nowPlaying, setnowPlaying] = useState([])

  useEffect(() => {
    async function fetchTrack() {
      const data = await fetch('api/now-playing')
      setnowPlaying(await data.json())
    }
    fetchTrack();
  }, [])

  if (nowPlaying.length === 0) return 'lost connection to Spotify API'

  return (
    <center>
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
                    <b>artist:</b> {nowPlaying.artist}<br />
                    <b>title:</b> {nowPlaying.title}<br />
                    <b>album:</b> {nowPlaying.album}
                </div>
            </div>
            <div className="image-column">
              <Image src="/spotify_icon.png" alt="Spotify Logo" width="30" height="30" />
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
      }
    </center>
  )
}