import "./App.css";
import { BackToTopButton } from "./components/back-to-top-button";
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
      <BackToTopButton />
    </div>
  );
}

export default App;
