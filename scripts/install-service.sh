#!/bin/bash
#
# break-screen インストールスクリプト
#
# このスクリプトはlaunchdを使ってbreak-screenをシステム起動時に自動起動するように設定します
#

set -e

PLIST_SRC="$(cd "$(dirname "$0")/.." && pwd)/com.user.break-screen.plist"
PLIST_DST="$HOME/Library/LaunchAgents/com.user.break-screen.plist"

echo "=== break-screen インストール ==="

# ビルド
echo "1. TypeScriptをビルドしています..."
npm run build

# ログディレクトリ作成
echo "2. ログディレクトリを作成しています..."
mkdir -p logs

# LaunchAgentsディレクトリ作成
echo "3. LaunchAgentsディレクトリを作成しています..."
mkdir -p "$HOME/Library/LaunchAgents"

# 既存のサービスを停止・削除
if launchctl list | grep -q "com.user.break-screen"; then
    echo "4. 既存のサービスを停止しています..."
    launchctl unload "$PLIST_DST" 2>/dev/null || true
fi

# plistファイルをコピー
echo "5. launchd設定ファイルをコピーしています..."
cp "$PLIST_SRC" "$PLIST_DST"

# サービスを起動
echo "6. launchdでサービスを起動しています..."
launchctl load "$PLIST_DST"

echo ""
echo "✅ インストール完了！"
echo ""
echo "使い方:"
echo "  launchctl list | grep break-screen  # ステータス確認"
echo "  tail -f logs/output.log             # ログを表示"
echo "  launchctl stop com.user.break-screen   # 停止"
echo "  launchctl start com.user.break-screen  # 再起動"
echo "  launchctl unload $PLIST_DST         # 削除"
echo ""
