# Guardrail - 学習済みルール

このファイルは、会話履歴から自動的に学習した内容を蓄積します。

## プロジェクト仕様

- **2026-01-13** break-screen: 毎時50分にmacOSスクリーンセーバーを起動する常駐アプリ
  - Node.js + TypeScript + macOS専用
  - PM2によるバックグラウンド常駐化
  - マジックナンバー完全排除方針（`src/config/constants.ts`で一元管理）

- **2026-01-13** ログ出力は必ずloggerモジュール経由で実行
  - `console.log`の直接呼び出しを排除
  - 統一されたログ形式: `[APP.NAME] [LEVEL] TIMESTAMP message`
  - logger関数: `info()`, `warn()`, `error()`

## エラー対応

- **2026-01-13** `npm audit fix --force`実行中のwatch modeテストエラーは一時的なもの
  - 依存関係更新中にnode_modulesが不整合状態になることがある
  - 更新完了後の手動実行では正常動作する
  - エラー例: `Cannot find module '@vitest/utils/timers'`
  - 対処: 依存関係更新完了を待ってから再テスト実行

- **2026-01-13** 開発依存関係（devDependencies）の脆弱性は本番環境に影響なし
  - vitestなどのテストツールの脆弱性は開発環境のみの問題
  - 「今回はスキップ」か「今すぐ修正」かを判断する基準にする

## コーディング規約

- **2026-01-13** function宣言への統一
  - アロー関数 `const func = () => {}` ではなく `function func() {}` を使用
  - プロジェクト全体での一貫性を保つ

- **2026-01-13** 動的なプレフィックス生成で重複排除
  - `LOG_PREFIX`のような定数は`NAME`から動的生成する
  - 重複した定義を避ける
  - 例: `[${APP.NAME}]` を動的に生成

- **2026-01-13** 不要な出力の排除
  - `data`が`undefined`の場合は出力しない
  - 空文字列の出力を避ける
  - 例: `data !== undefined` で条件分岐

## Tips

- **2026-01-13** code-simplifierエージェントで冗長性削除と一貫性向上
  - 使用方法: `@"code-simplifier:code-simplifier (agent)"`
  - 冗長性削除、可読性向上、一貫性確保、保守性向上を自動実施
  - すべての機能を保持しながらコード改善

- **2026-01-13** macOS ScreenSaverEngine.appのパスはバージョン別にフォールバック必要
  - Modern (macOS 15+ Sequoia): `/System/Library/CoreServices/ScreenSaverEngine.app`
  - Legacy (macOS 14以前): `/System/Library/Frameworks/ScreenSaver.framework/Resources/ScreenSaverEngine.app`
  - 両方を`existsSync()`でチェックしてフォールバック実装

- **2026-01-13** vitest 4.0.17へのアップデートでesbuild脆弱性解消
  - GHSA-67mh-4wv8-2f99の脆弱性を修正
  - `npm audit fix --force`で自動修正可能
  - テスト実行で動作確認必須

---

最終更新: 2026-01-13
このファイルは `/guardrail-builder` スキルにより自動更新されます。
