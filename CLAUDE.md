# break-screen プロジェクト設定

## プロジェクト概要

毎時50分にmacOSのスクリーンセーバーを自動起動して休憩を促すアプリ。

- **技術スタック**: Node.js + TypeScript
- **対象OS**: macOS専用
- **常駐方法**: PM2

## 開発ルール

### 基本方針

- マジックナンバー完全排除（`src/config/constants.ts`で管理）
- logger統一使用（`console.log`の直接呼び出し禁止）
- function宣言への統一
- テストカバレッジ95%以上維持

### コマンド

```bash
# 開発
npm run dev

# ビルド
npm run build

# テスト
npm test

# Lint/Format
npm run lint
npm run format

# 常駐化
./scripts/install-service.sh
pm2 logs break-screen
```

## 学習済みルール

@CLAUDE-guardrail.md
