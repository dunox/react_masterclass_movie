import React from "react";
import { MovieItem, movie } from "./MovieItem";

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

export default App;
