# mayocalc
400g298円のマヨネーズと550g398円のマヨネーズどっちが安いか計算するアプリ


## システム  
- Next.js  
- pnpm  
- tailwind css
- Github pageに静的デプロイ  
- スマホでの表示を想定  

## 機能  
- トップページにカードを2枚表示  
- カードにテキストの入力フォームが2つ  
- 入力フォームの一つに量を入力  
- 入力フォームもう1つに金額を入力  
- テキストボックスにそれぞれ値が入ったら、金額/量を計算して表示  
- もう1枚のカードにも入力したら、安い方のカードをグリーンにする  

## 🛠️ コンポーネント設計

### `<MayoCard />`

| プロパティ     | 説明                                   |
|----------------|----------------------------------------|
| `id`           | 識別用（A / B）                        |
| `amount`       | 入力された量                      |
| `price`        | 入力された価格                   |
| `onChange`     | 親コンポーネントに変更を通知する関数 |
| `isCheapest`   | 安い方かどうか（trueなら緑色に）       |


#### 内部構成

- `<input type="number" />` × 2（量・価格）
- 計算結果表示（`price / amount`）
- Tailwindでスタイル制御（`bg-green-100`など）
## 🔁 状態管理

トップページ（`Home`）で以下の状態を保持：

```ts
const [cardA, setCardA] = useState({ amount: '', price: '' });
const [cardB, setCardB] = useState({ amount: '', price: '' });
```

- 両方のカードの値が揃ったら、price / amountを比較
- 安い方にisCheapest = trueを渡す

## 🎨 UI設計（Tailwindベース）

- カード：`rounded-lg shadow-md p-4 bg-white`
- 入力フォーム：`border rounded px-2 py-1 w-full`
- 安い方：`bg-green-100 border-green-400`
- スマホ対応：`max-w-sm mx-auto`で中央寄せ

---

## 🚀 デプロイ手順（GitHub Pages）

1. `next.config.js` に `output: 'export'` を設定
2. `pnpm build && pnpm export`
3. `out/` フォルダを GitHub Pages にアップロード

---

## ✅ 今後の拡張アイデア

- 入力履歴の保存（localStorage）
- 単位切り替え（g → ml）
- 複数商品の比較（3枚以上のカード）

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

