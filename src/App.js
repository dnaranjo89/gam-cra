import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    window.googletag = window.googletag || { cmd: [] };
    window.googletag.cmd.push(function () {
      window.googletag
        .defineSlot(
          "/22647697430/desktop-horizontal-bar",
          [728, 90],
          "div-gpt-ad-1638801738230-0"
        )
        .addService(window.googletag.pubads());
      window.googletag.pubads().enableSingleRequest();
      window.googletag.enableServices();
    });
    window.googletag.cmd.push(function () {
      window.googletag.display("div-gpt-ad-1638801738230-0");
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div
          id="div-gpt-ad-1638801738230-0"
          style={{ minWidth: "728px", minHeight: "90px" }}
        >
          {/* <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1638801738230-0'); });
          </script> */}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
