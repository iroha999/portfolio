# Genki Gonpei Portfolio

個人サイトです。モダンなUIとリキッドグラス効果を使用したデザインが特徴です。

## 🚀 技術スタック

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Package Manager**: pnpm

## 📁 プロジェクト構成

```
portfolio/
├── app/
│   ├── globals.css      # グローバルスタイル
│   ├── layout.tsx       # ルートレイアウト
│   └── page.tsx         # メインページ
├── components/
│   └── LiquidGlass.tsx  # リキッドグラス効果コンポーネント
├── lib/
│   └── utils.ts         # ユーティリティ関数
├── public/              # 静的ファイル
└── ...
```

## 🛠️ セットアップ

### 必要条件

- Node.js 18以上
- pnpm

### インストール

```bash
# 依存関係のインストール
pnpm install
```

### 開発サーバーの起動

```bash
pnpm dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

### 本番ビルド

```bash
pnpm build
pnpm start
```

## ✨ 機能

- **リキッドグラス効果**: ホバー時にインタラクティブなガラス効果を表現
- **レスポンシブデザイン**: モバイル・デスクトップ対応
- **アニメーション**: スムーズなフェードイン・フロートアニメーション

## 📝 ライセンス

© 2026 Genki Gonpei
