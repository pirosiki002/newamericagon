"use client";
import { useState, useEffect } from "react";
import useDic from "@/app/hooks/useDic";
import styles from "./GameBoard.module.css";
import InputTable from "../InputTable/InputTable";

// 盤面の状態を管理する
const BOARD_SIZE = 7;

// 盤面の初期化
const createInitialBoard = (size: number) => {
  return Array(size)
    .fill("")
    .map(() => Array(size).fill(""));
};

const GameBoard = () => {
  // 辞書機能を使うために、useDic.tsxからの処理を呼び出す
  const [board, setBoard] = useState(createInitialBoard(BOARD_SIZE)); // useStateを使って盤面の状態を管理。値を更新するたびに再描画する
  const [selectedRow, setSelectedRow] = useState(0); // 選択した行の状態管理
  const [selectedCol, setSelectedCol] = useState(0); // 選択した列の状態管理

  // マスを選択または入力したときに呼び出される関数
  const handleSelectCell = (row: number, col: number) => {
    setSelectedRow(row);
    setSelectedCol(col);
  };

  const {
    verticalQuery,
    setVerticalQuery,
    holizontalQuery,
    setHolizontalQuery,
    results,
    handleSearch,
  } = useDic(board, selectedRow, selectedCol);

  // これまでに入力されたすべてのセルを追跡
  const [inputCells, setInputCells] = useState<{ row: number; col: number }[]>(
    []
  );

  // セルがクリックされたときのコールバック関数
  const handleCellClick = (row: number, col: number) => {
    // テーブル全体にセットして盤面全体を管理する
    setInputCells([...inputCells, { row, col }]);
    // 現在位置をセット。テーブル全体と比較して、単語が成立しているかどうかをチェックするために必要
    handleSelectCell(row, col);
  };

  // boardの状態が更新されるたびに、その内容をqueryに設定し、辞書検索を行う
  useEffect(() => {
    const word = board.flat().join("");
    // 縦だけでOK。
    setVerticalQuery(word);
    handleSearch();
  }, [board]);

  // リセットボタンを押したときの処理
  const handleReset = () => {
    setInputCells([]); // inputCellsをリセット
    setBoard(createInitialBoard(BOARD_SIZE));
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Pirorin Game</h1>
        <InputTable
          size={BOARD_SIZE}
          board={board}
          setBoard={setBoard}
          onCellClick={handleCellClick}
          inputCells={inputCells}
        />
        {/* <ResetButton onReset={handleReset} /> */}
        <p>English word here</p>
        <h2>Col：{verticalQuery}</h2>
        <li>{results.vertical}</li>
        <h2>Row：{holizontalQuery}</h2>
        <li>{results.horizontal}</li>
      </div>
    </>
  );
};

export default GameBoard;
