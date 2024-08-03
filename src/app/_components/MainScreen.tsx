import React from "react";
import GameBoard from "./GameBoard/GameBoard";

const MainScreen = () => {
  // 状態管理のためのコードがここに来ます

  return (
    <div>
      <GameBoard />
      {/* <GameBoard />
      <ScoreBoard />
      <Timer /> */}
      {/* 他の必要なコンポーネント */}
    </div>
  );
};

export default MainScreen;
