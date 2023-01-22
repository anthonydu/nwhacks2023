import Head from 'next/head';

export default function VideoSelection() {
  return (
    <>
      <Head>
        <title>Study Buddies - UnDUE</title>
      </Head>
      <main style={{ position: "fixed", top: 0, left: 0, height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: 20, borderRadius: 20 }}>
          <h5 style={{ color: "white" }}>This is a page for uploading and selecting videos or streams to watch</h5>
        </div>
      </main>
    </>
  )
}
