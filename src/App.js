import SearchFilter from "./components/SearchFilter";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Redux</h1>
        <SearchFilter data={data} />
      </header>
    </div>
  );
}

export default App;
