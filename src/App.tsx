import "./App.css";
import { Article } from "./components/article";
import { BackToTopButton } from "./components/back-to-top-button";
import { Button } from "./components/button";
import { Header } from "./components/header";
import { RecordBox } from "./components/record-box";
import { Thumbnail } from "./components/thumbnail";
function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p>トップページサムネイル用パーツ</p>
      </header>
      <Button>自分の日記をもっと見る</Button>
      <BackToTopButton />
      <Thumbnail url="images/m01.jpg" text="Hello World" />
      <RecordBox
        url="images/MyRecommend-1.jpg"
        title="BODY RECORD"
        description="自分のカラダの記録"
      />
      <Article url="images/m01.jpg" text="Hello World" />
    </div>
  );
}

export default App;
