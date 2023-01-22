import { Player, LivepeerConfig, createReactClient, studioProvider } from '@livepeer/react';

export default function LivepeerPlayer() {
  const client = createReactClient({
    provider: studioProvider({ apiKey: 'b8cd3c2b-d6b3-49fe-af55-f5b24c893092' }),
  });

  return (
    <div style={{ position: "fixed", left: 0, top: 0, height: "100vh", width: `${1600/9}vh`, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <LivepeerConfig client={client}>
        <Player
          aspectRatio="16to9"
          playbackId="bafybeida3w2w7fch2fy6rfvfttqamlcyxgd3ddbf4u25n7fxzvyvcaegxy"
          controls={{ autohide: 1000 }}
          objectFit="cover"
          muted={true}
          autoPlay={true}
          loop={true}
        />
      </LivepeerConfig>
    </div>
  );
}