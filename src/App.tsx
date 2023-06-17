import './App.css';
import {ReactComponent as ReactLogo} from './components/icons/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReactLogo />
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
