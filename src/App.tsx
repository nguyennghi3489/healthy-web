import './App.css';
import { Header } from './components/header';
function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>
          トップページサムネイル用パーツ
        </p>
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
