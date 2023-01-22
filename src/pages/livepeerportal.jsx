import Head from 'next/head';
import { useState, useRef } from 'react';

export default function LivepeerPortal({ id, setId }) {
  const inputRef = useRef();
  const [isAlert, setIsAlert] = useState(false);

  const handleClick = () => {
    if (id === inputRef.current.value) {
      setIsAlert(true);
    } else {
      setId(inputRef.current.value);
      setIsAlert(false);
    }
  }

  return (
    <>
      <Head>
        <title>Livepeer Portal - UnDUE</title>
      </Head>
      <main style={{ position: "fixed", top: 0, left: 0, height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: 20, padding: 20 }}>
          <h3 style={{ color: "white" }}>Livepeer Portal</h3>
          <input ref={inputRef} style={{ width: "500px", padding: 5, borderRadius: 10, margin: 5, fontSize: 30, textAlign: "center", border: 0 }} placeholder="Please enter Livepeer Playback ID"></input>
          <p className="mb-0" style={{ color: "red", display: `${isAlert ? "block" : "none" }` }}>The video with this ID is already playing!</p>
          <button onClick={handleClick} style={{ padding: "10px 20px", borderRadius: 10, margin: 5, fontSize: 20, border: 0 }}>Search and Play</button>
        </div>
      </main>
    </>
  )
}
