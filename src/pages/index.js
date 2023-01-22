import Head from 'next/head';
import { useState, useEffect } from 'react';
import LivepeerPlayer from "../components/LivepeerPlayer";
import Video from '../components/Video'; 

export default function Home() {
  const [date, setDate] = useState(`${new Date().getHours()}:${("0" + new Date().getMinutes()).slice(-2)}`);

  useEffect(() => {
    setInterval(() => {
      setDate(`${new Date().getHours()}:${new Date().getMinutes()}`);
    }, 60000);
  });

  return (
    <>
      <Head>
        <title>nwHacks App</title>
      </Head>
      <main style={{ position: "fixed", top: 0, left: 0, height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <LivepeerPlayer />
        <div style={{ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: 10, padding: 10 }}>
          <p style={{ fontSize: 100, color: "white" }}>{date}</p>
          <p style={{ color: "white" }}>"Some inspirational quote thingy"</p>
        </div>
      </main>
    </>
  )
}
