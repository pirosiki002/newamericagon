import React from 'react';
import GameBoard from './GameBoard';

const MainScreen = () => {
  // 状態管理のためのコードがここに来ます

  return (
    <div>
      <h1>Americagon</h1>
      {/* ここに他のコンポーネントを配置します */}
      <GameBoard />
      {/* <GameBoard />
      <ScoreBoard />
      <Timer /> */}
      {/* 他の必要なコンポーネント */}
    </div>
  );
};

export default MainScreen;