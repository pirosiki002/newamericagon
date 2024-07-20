## What is this Web app?
Japanese explanation is below / 日本語の説明は下のほうにあります。

This is an English puzzle game. It features a 10x10 grid where each cell can contain one letter. When you form a valid English word, its meaning is displayed.

## Folder structure
/src
  /pages
    index.tsx (Homepage and main game view)
    _app.tsx (Global styles and layout settings)
  /components
    Grid.tsx (Component displaying a 10x10 grid)
    Cell.tsx (Component representing each cell of the grid)
    WordInput.tsx (Component for alphabet input)
    WordDefinition.tsx (Component displaying word definitions)
  /hooks
    useWordValidation.ts (Custom hook containing word validation logic)
  /services
    dictionaryApi.ts (Service handling requests to the dictionary API)
  /public
    /images (Static resources like image files)
  /styles
    globals.css (Global styles)
    Home.module.css (Styles specific to the homepage)

## Deploy on Vercel
https://vercel.com/pirosiki002s-projects/newamericagon


## このWebアプリについて
これは英語のパズルゲームです。10×10のマスがあり、各セルに1文字を入力することができます。英単語を形成すると、その意味が表示されます。

## フォルダ構成
/src
  /pages
    index.tsx (ホームページとゲームのメインビュー)
    _app.tsx (グローバルスタイルとレイアウトの設定)
  /components
    Grid.tsx (10x10のグリッドを表示するコンポーネント)
    Cell.tsx (グリッドの各マス目を表すコンポーネント)
    WordInput.tsx (アルファベット入力用のコンポーネント)
    WordDefinition.tsx (単語の意味を表示するコンポーネント)
  /hooks
    useWordValidation.ts (単語検証のロジックを含むカスタムフック)
  /services
    dictionaryApi.ts (辞書APIへのリクエストを扱うサービス)
  /public
    /images (画像ファイルなどの静的リソース)
  /styles
    globals.css (グローバルスタイル)
    Home.module.css (ホームページ専用のスタイル)

## Vercelで動作確認
https://vercel.com/pirosiki002s-projects/newamericagon
