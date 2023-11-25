import "./App.css";
import Dictionary from "./Dictonary";

function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="Sea" />
      <footer>
        <a href="https://github.com/Kyicodes/react-dictionary">Open-source </a>
        by Ta'kyiah Jones
      </footer>
    </div>
  );
}

export default App;
