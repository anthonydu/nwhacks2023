import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default function Timer() {
  const [date, setDate] = useState(`${new Date().getHours()}:${("0" + new Date().getMinutes()).slice(-2)}`);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCanceled, setIsCanceled] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [time, setTime] = useState(10);
  const [key, setKey] = useState(0);
  const [h, setH] = useState("00");
  const [m, setM] = useState("00");
  const [s, setS] = useState("10");
  const hRef = useRef();
  const mRef = useRef();
  const sRef = useRef();

  useEffect(() => {
    setInterval(() => {
      setDate(`${new Date().getHours()}:${("0" + new Date().getMinutes()).slice(-2)}`);
    }, 60000);
  });

  const handleCancel = () => {
    setKey(key + 1);
    setIsPlaying(false);
    setIsCanceled(true);
    setIsCompleted(false);
  }

  const handlePauseStart = () => {
    if (isCanceled) {
      const h = hRef.current.value;
      const m = mRef.current.value;
      const s = sRef.current.value;
      setTime(h * 3600 + m * 60 + s * 1);
      setIsPlaying(true);
      setIsCanceled(false);
    } else {
      setIsPlaying(!isPlaying);
    }
  }

  const handleComplete = () => {
    const audio = new Audio("/signal.mp3");
    audio.play();
    setIsPlaying(false);
    setIsCompleted(true);
  }

  function secondsToHms(d) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);

    const hDisplay = ("0" + h).slice(-2);
    const mDisplay = ("0" + m).slice(-2);
    const sDisplay = ("0" + s).slice(-2);
    return { h: hDisplay, m: mDisplay, s: sDisplay }; 
  }

  return (
    <>
      <Head>
        <title>Timer - UnDUE</title>
      </Head>
      <main style={{ position: "fixed", top: 0, left: 0, height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        <p style={{ color: "white", fontSize: 30, position: "fixed", top: "10%", left: "50%", transform: "translate(-50%, 0)" }}>{date}</p>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={time}
          colors={['#32CD32', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          trailColor="rgba(0, 0, 0, 0)"
          size={300}
          strokeWidth={30}
          onComplete={handleComplete}
          key={key}
        >
          {({ remainingTime }) => (
            <form>
              <div>
                <input ref={hRef} style={{ width: "50px", padding: 5, borderRadius: 10, margin: 5, fontSize: 30, textAlign: "center", border: 0, color: `${isCanceled ? "black" : "white"}`, backgroundColor: `${isCanceled ? "white" : "transparent"}` }} placeholder={`${isCanceled ? "H" : ""}`} maxlength="2" value={isCanceled ? h : secondsToHms(remainingTime).h} disabled={isCanceled ? false : true} onChange={(e) => setH(e.target.value)}></input>
                <input ref={mRef} style={{ width: "50px", padding: 5, borderRadius: 10, margin: 5, fontSize: 30, textAlign: "center", border: 0, color: `${isCanceled ? "black" : "white"}`, backgroundColor: `${isCanceled ? "white" : "transparent"}` }} placeholder={`${isCanceled ? "M" : ""}`} maxlength="2" value={isCanceled ? m : secondsToHms(remainingTime).m} disabled={isCanceled ? false : true} onChange={(e) => setM(e.target.value)}></input>
                <input ref={sRef} style={{ width: "50px", padding: 5, borderRadius: 10, margin: 5, fontSize: 30, textAlign: "center", border: 0, color: `${isCanceled ? "black" : "white"}`, backgroundColor: `${isCanceled ? "white" : "transparent"}` }} placeholder={`${isCanceled ? "S" : ""}`} maxlength="2" value={isCanceled ? s : secondsToHms(remainingTime).s} disabled={isCanceled ? false : true} onChange={(e) => setS(e.target.value)}></input>
              </div>
            </form>
          )}
        </CountdownCircleTimer>
        <div style={{ position: "relative", top: "15%" }}>
          <button onClick={handlePauseStart} style={{ padding: "10px 20px", borderRadius: 10, margin: 5, fontSize: 20, border: 0, backgroundColor: "white" }} disabled={isCompleted ? true : false}>{isPlaying ? "Pause" : "Start"}</button>
          <button onClick={handleCancel} style={{ padding: "10px 20px", borderRadius: 10, margin: 5, fontSize: 20, border: 0, backgroundColor: "white" }} disabled={isPlaying ? true : false}>{isCompleted ? "Dismiss" : "Cancel"}</button>
        </div>
      </main>
    </>
  )
}
