import "./App.css";
import Dictionary from "./Dictonary";

function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="Fire" />
      <footer>
        <a
          href="https://github.com/Kyicodes/react-dictionary"
          className="text-decoration-none"
        >
          Open-source{" "}
        </a>
        by Ta'kyiah Jones
      </footer>
    </div>
  );
}

export default App;
