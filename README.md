# NAGI. — POP-UP STORE

アパレルブランドのポップアップストア用デザイン案です。
HTML / CSS / JavaScriptのみの静的サイト。依存パッケージ・ビルド・環境変数は不要です。
ブランド、商品、開催情報、特典は仮設定。写真はAI生成画像です。

## GitHub → Vercelで公開

1. ZIPを展開します。
2. GitHubに空のリポジトリーを作成します。
3. `nagi-popup`フォルダーの**中身**を登録します。リポジトリー直下に`vercel.json`、`package.json`、`public/`がある配置にしてください。
4. Vercelの「Add New → Project」から、そのGitHubリポジトリーをImportします。
5. 設定を確認してDeployします。`vercel.json`で静的サイト用の設定を指定済みです。

| 項目 | 値 |
| --- | --- |
| Framework Preset | Other |
| Root Directory | リポジトリー直下（変更不要） |
| Build Command | 空欄（ビルド不要） |
| Output Directory | public |
| Install Command | 空欄（インストール不要） |
| Environment Variables | なし |

既存のVercelプロジェクトを使う場合、画面で入力した古い設定が残っていないか確認してください。
公開後は、Vercelのアクセス設定を確認し、共有相手がURLを開けることも確認してください。

### Gitコマンドで登録する場合

空のGitHubリポジトリーを作ってから、このフォルダー内で実行します。
`YOUR_ACCOUNT`は自分のGitHubアカウントに置き換えてください。

```bash
git init
git add .
git commit -m "Add NAGI popup website"
git branch -M main
git remote add origin https://github.com/YOUR_ACCOUNT/nagi-popup.git
git push -u origin main
```

## ローカル確認

Node.js 20以降があれば、依存パッケージのインストールなしで起動できます。

```bash
npm run dev
```

ブラウザで http://127.0.0.1:3000 を開きます。終了はCtrl+Cです。
Node.jsがない場合は、`public/index.html`をブラウザで直接開いても表示できます。

## ファイル構成

- `public/index.html` — 本文・メタ情報
- `public/assets/style.css` — レイアウト・スマホ対応・A4印刷用スタイル
- `public/assets/main.js` — 表示切り替え・印刷処理
- `public/assets/campaign.jpg` — 同梱のAI生成写真
- `vercel.json` — Vercel用設定
- `scripts/serve.mjs` — ローカル確認用サーバー
- `package.json` — ローカル起動コマンド

## デザイン・印刷

- メイン画像は画面のフル幅。
- 下段の2カラムは、左の写真が画面幅の50%、右の文章は最大コンテンツ幅の半分。
- スマートフォンでは縦積みに切り替えます。
- 上部の「A4プレビュー」でA4タテの組み方を確認できます。
- 「印刷 / PDF」、またはCtrl+Pで印刷画面を開きます。

推奨印刷設定：**A4・縦・倍率100%・余白なし・ヘッダーとフッターOFF・背景のグラフィックON**。
余白なしの設定はPDF保存向けです。家庭用プリンターでは機種固有の印刷不可領域があるため、用紙に合わせる設定が必要になる場合があります。
印刷用レイアウトは1枚に収める設計ですが、実ブラウザ・実プリンターでの最終印刷は未検証です。文章量を増やした場合は改ページも確認してください。

## 差し替え

本文・開催日時・会場は`public/index.html`を編集します。
写真は`public/assets/campaign.jpg`を置き換えます。
色・コンテンツ幅は`style.css`先頭の`:root`、印刷用の寸法は`body.a4`と`@media print`で調整できます。

## 確認範囲

HTML内のローカル参照、JavaScript構文、静的ファイルのHTTP配信、Vercel設定JSONを確認しています。
この出力プロジェクト自体のGitHub登録・Vercelへのデプロイは実行していません。

## Vercel公式資料

- https://vercel.com/docs/builds/configure-a-build
- https://vercel.com/docs/project-configuration/vercel-json
