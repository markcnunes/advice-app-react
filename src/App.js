import React from "react";
import "./App.css";
import FetchAdvice from "./components/FetchAdvice";

function App() {
  return (
    <div className="App">
      <FetchAdvice />
      <footer>
        <a
          href="https://markclausnunes.com/"
          title="mark Claus Nunes"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--primary"
        >
          Created by Mark -{" "}
        </a>
        <a
          href="https://unsplash.com/photos/FwiNLpZdKVk/"
          title="Photo by Evgeni Tcherkasski"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--primary"
        >
          Photo by Evgeni Tcherkasski
        </a>
      </footer>
    </div>
  );
}

export default App;
