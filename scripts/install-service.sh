#!/bin/bash
#
# break-screen インストールスクリプト
#
# このスクリプトはpm2を使ってbreak-screenをシステム起動時に自動起動するように設定します
#

set -e

echo "=== break-screen インストール ==="

# ビルド
echo "1. TypeScriptをビルドしています..."
npm run build

# ログディレクトリ作成
echo "2. ログディレクトリを作成しています..."
mkdir -p logs

# pm2でアプリを起動
echo "3. PM2でアプリを起動しています..."
pm2 start ecosystem.config.js

# システム起動時の自動起動を設定
echo "4. システム起動時の自動起動を設定しています..."
pm2 save
pm2 startup

echo ""
echo "✅ インストール完了！"
echo ""
echo "使い方:"
echo "  pm2 logs break-screen   # ログを表示"
echo "  pm2 stop break-screen   # 停止"
echo "  pm2 restart break-screen # 再起動"
echo "  pm2 delete break-screen # 削除"
echo ""
