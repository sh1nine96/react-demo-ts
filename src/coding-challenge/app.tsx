import React from "react";
import "./app.css";

function App() {
  const T_twister = {
    padding: 10,
    color: "Red",
  };

  const numbering = {
    fontSize: 30,
  };

  const styling = {
    fontFamily: "monospace",
  };

  const combined = {
    ...T_twister,
    ...numbering,
    width: 200,
    height: 200,
    margin: 10,
    backgroundColor: "blue",
  };

  return (
    <div>
      <header
        style={{
          backgroundColor: "rgba(0, 0, 0)",
          color: "white",
          fontFamily: "fantasy",
          fontSize: 50,
          textAlign: "center",
        }}
      >
        Develop using React with Typescript
      </header>

      <div style={{ padding: 50, backgroundColor: "GrayText", color: "white" }}>
        <h2 style={T_twister}>Tongue Twister's</h2>
        <h2 style={{ ...numbering, ...styling }}>1</h2>

        <p style={{ ...styling, height: 300 }}>
          Peter Piper picked a peck of pickled peppers <br />
          A peck of pickled peppers Peter Piper picked <br />
          If Peter Piper picked a peck of pickled peppers <br />
          Where’s the peck of pickled peppers Peter Piper picked?
        </p>

        <h2 style={{ ...numbering, ...styling }}>2</h2>
        <p style={styling}>
          Betty Botter bought some butter <br />
          But she said the butter’s bitter <br />
          If I put it in my batter, it will make my batter bitter <br />
          But a bit of better butter will make my batter better <br />
          So ‘twas better Betty Botter bought a bit of better butter
        </p>
      </div>
      <div className="animation" style={combined}></div>
    </div>
  );
}

export default App;
