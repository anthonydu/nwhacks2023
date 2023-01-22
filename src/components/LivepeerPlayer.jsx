import { Player, LivepeerConfig, createReactClient, studioProvider } from '@livepeer/react';
import { useEffect } from 'react';

export default function LivepeerPlayer(props) {
  const client = createReactClient({
    provider: studioProvider({ apiKey: 'b8cd3c2b-d6b3-49fe-af55-f5b24c893092' }),
  });

  return (
    <div style={{ position: "fixed", left: 0, top: 0, height: "100vh", width: `${1600/9}vh`, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <LivepeerConfig client={client}>
        <Player
          aspectRatio={props.aspectRatio}
          playbackId="bafybeigtqixg4ywcem3p6sitz55wy6xvnr565s6kuwhznpwjices3mmxoe"
          controls={{ autohide: 1000 }}
          objectFit="cover"
          muted={true}
          autoPlay={true}
          loop={true}
          showLoadingSpinner={false}
        />
      </LivepeerConfig>
    </div>
  );
}