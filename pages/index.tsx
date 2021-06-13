import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function toptenTracks() {
  const [toptenList, settoptenList] = useState([])

  useEffect(() => {
    async function fetchtoptenList() {
      const list = await fetch('api/top-tracks')
      settoptenList(await list.json())
    }
    fetchtoptenList();
  }, [])

  if (toptenList.length === 0) return 'cannot connect to Spotify database'

  return (
    <div className="page">
      <Head>
        <title>Andy Nystrom - Current Top Ten</title>
      </Head>

      <div className="title">
        CURRENT TOP TEN
      </div>
      
      {toptenList.map((topTen) => (
        <div className="container">
          <div className="image-column">
            <Link href={topTen.songUrl}><a target="_blank">
            <img className="top-ten-img" src={topTen.albumImageUrl} />
            </a></Link>
          </div>

          <div className="column">
            <div className="top-ten-text">
              <b>artist:</b><br />
              {topTen.artist}<br />
              <b>track:</b><br />
              {topTen.title}<br />
            </div>
          </div>
        </div>
      ))}


      <style jsx>{`
      .page {
      font-family: monospace;
      margin: 0rem 0rem 3rem 0rem;
      }
      .title {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      margin: 2rem 0rem 2rem 0rem;
      }
      .container {
      display: flex;
      justify-content: left;
      align-items: center;
      margin: 0.5rem 1rem 0.5rem 1rem;
      }
      .image-column {
      margin: 0rem 0rem 0rem 0rem;
      }
      .column {
      margin: 0rem 1rem 0rem 1rem;
      }
      .top-ten-img {
      max-width: 8rem;
      }
      .top-ten-text {
      font-size: 1rem;
      line-height: 1.3rem;
      }
      `}</style>
    </div>
  )
}