import "./App.css";
import { Button } from "./components/button";
import { Header } from "./components/header";
function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>トップページサムネイル用パーツ</p>
      </header>
      <Button>自分の日記をもっと見る</Button>
    </div>
  );
}

export default App;
