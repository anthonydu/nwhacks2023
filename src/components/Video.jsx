

export default function Video() {
  return (
    <div style={{ position: "fixed", left: 0, top: 0, height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <video
        controls
        preload="auto"
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
        autoplay
      >
        <source
          src="https://livepeercdn.studio/recordings/bd600224-d93a-4ddc-a6ac-2d71e3c36768/index.m3u8"
          type="application/x-mpegURL"
        />
      </video>
      <script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
    </div>
  );
}