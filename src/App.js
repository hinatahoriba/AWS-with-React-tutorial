import {useState } from "react"
import './App.css';

function App() {
  return (
    <div>
      <h1>ログインフォーム</h1>
      <form>
        <label for="name">名前</label>
        <input id="name" type="text" name="name" placeholder='名前を入力してください' />
        <br />
        <label for="password">パスワード</label>
        <input id="password" type="text" name="password" placeholder='パスワードを入力してください' />
        <br />
        <button>ログイン</button>
      </form>
    </div>
  );
}

export default App;
