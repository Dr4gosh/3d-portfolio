"use client";

import Globe from "react-globe.gl";

export const GlobeComponent = () => {
  return (
    <>
      <Globe
        height={325}
        // width={325}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        labelsData={[
          {
            lat: 46.568825,
            lng: 26.916025,
            text: "I am here!",
            color: "white",
            size: 30,
          },
        ]}
      />
    </>
  );
};
