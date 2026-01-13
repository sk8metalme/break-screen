# break-screen

毎時50分にmacOSのスクリーンセーバーを自動起動して、休憩を促すアプリです。

## 特徴

- ⏰ **自動起動**: 毎時50分になると自動的にスクリーンセーバーを起動
- 🍎 **macOS専用**: macOSネイティブのScreenSaverEngine.appを使用
- 🔧 **シンプル**: 設定不要、インストールするだけで動作
- 🚀 **常駐化対応**: PM2を使ってバックグラウンドで常駐

## 必要要件

- macOS 14以降
- Node.js 20以降
- PM2 (グローバルインストール推奨)

## インストール

### 1. リポジトリをクローン

```bash
git clone <your-repo-url>
cd break-screen
```

### 2. 依存パッケージをインストール

```bash
npm install
```

### 3. PM2をグローバルインストール（未インストールの場合）

```bash
npm install -g pm2
```

### 4. インストールスクリプトを実行

```bash
./scripts/install-service.sh
```

これにより以下が自動的に行われます：
- TypeScriptのビルド
- PM2でのアプリ起動
- システム起動時の自動起動設定

## 使い方

### 開発モード（テスト用）

```bash
npm run dev
```

### ログを確認

```bash
pm2 logs break-screen
```

### 停止

```bash
pm2 stop break-screen
```

### 再起動

```bash
pm2 restart break-screen
```

### 常駐解除

```bash
pm2 delete break-screen
```

## 設定のカスタマイズ

休憩時間を変更したい場合は、`src/config/constants.ts`を編集してください。

```typescript
export const SCHEDULE = {
  TRIGGER_MINUTE: 50,  // ← この値を変更
  CRON_EXPRESSION: '50 * * * *',  // ← cron式も変更
} as const;
```

変更後は再ビルドと再起動が必要です：

```bash
npm run build
pm2 restart break-screen
```

## 開発

### テスト実行

```bash
npm test
```

### ビルド

```bash
npm run build
```

### Lint/Format

```bash
npm run lint
npm run format
```

## ライセンス

MIT
