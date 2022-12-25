import * as React from "react";
import ReactMapGL from "react-map-gl";

function App() {
  const [viewport, setViewport] = React.useState({
    width: "100vw",
    height: "100vh",
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  });
  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewPort) => setViewport(nextViewPort)}
      />
      ;
    </div>
  );
}

export default App;
