import Head from 'next/head';
import { useState, useRef } from 'react';

export default function StudyBuddies() {
  const [selected, setSelected] = useState(0);
  const [messages, setMessages] = useState([]);
  const messageRef = useRef();
  const messagesRef = useRef();

  const handleKey = (e) => {
    if (e.key === "Enter" && messageRef.current.value !== "" && selected === 0) {
      setMessages([...messages, messageRef.current.value]);
      messageRef.current.value = "";
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }
  
  return (
    <>
      <Head>
        <title>Study Buddies - UnDUE</title>
      </Head>
      <main style={{ position: "fixed", top: 0, left: 0, height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        <div style={{ width: 600, height: 400, backgroundColor: "rgba(0, 0, 0, 0.5)", padding: 20, borderRadius: 20, display: "flex" }}>
          <div style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: 20 }}>
            <div style={{ paddingLeft: 20 }}>
              <input style={{ width: "100%", height: "100%" , fontSize: 20, backgroundColor: "transparent", border: 0 }} placeholder='Search' />
            </div>
            <div onClick={() => setSelected(0)} style={{ cursor: "pointer", padding: 20, borderBottom: "2px solid black", borderTop: "2px solid black", backgroundColor: `${selected == 0 ? "rgba(255, 255, 255, 0.5)" : ""}` }}>
              <h5 className="mb-0">Anthony Du</h5>
            </div>
            <div onClick={() => setSelected(1)} style={{ cursor: "pointer", padding: 20, borderBottom: "2px solid black", backgroundColor: `${selected == 1 ? "rgba(255, 255, 255, 0.5)" : ""}` }}>
              <h5 className="mb-0">Stanford Hu</h5>
            </div>
            <div onClick={() => setSelected(2)} style={{ cursor: "pointer", padding: 20, borderBottom: "2px solid black", backgroundColor: `${selected == 2 ? "rgba(255, 255, 255, 0.5)" : ""}` }}>
              <h5 className="mb-0">Sally Han</h5>
            </div>
            <div onClick={() => setSelected(3)} style={{ cursor: "pointer", padding: 20, borderBottom: "2px solid black", backgroundColor: `${selected == 3 ? "rgba(255, 255, 255, 0.5)" : ""}` }}>
              <h5 className="mb-0">Mike Zhang</h5>
            </div>
          </div>
          <div style={{ flex: 2, backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: 20, margin: "0 0 0 20px" }}>
            <div style={{ padding: 10, borderTop: "2px solid black", position: "relative", top: 310 }}>
              <input ref={messageRef} style={{ width: "100%", height: "100%" , fontSize: 20, backgroundColor: "transparent", border: 0 }} placeholder='Type your message and press ENTER' onKeyDown={handleKey}/>
              <div ref={messagesRef} style={{ height: 309, position: "relative", bottom: 347, padding: "0 20px", display: `${selected == 0 ? "flex" : "none"}`, flexDirection: "column", alignItems: "flex-end", overflowY: "scroll" }}>
                {messages.map((message) => (
                    <p style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", padding: 10, borderRadius: 10, width: "fit-content" }}>{message}</p>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
