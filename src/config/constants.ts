/**
 * break-screen 定数定義
 *
 * マジックナンバーを避けるため、すべての設定値をここで管理
 */

/**
 * スケジュール設定
 */
export const SCHEDULE = {
  /** スクリーンセーバーを起動する「分」 (毎時) */
  TRIGGER_MINUTE: 50,
  /** cron式: 毎時50分に実行 */
  CRON_EXPRESSION: '50 * * * *',
} as const;

/**
 * macOSスクリーンセーバーのパス
 *
 * macOSのバージョンによって異なるため、複数のパスを定義
 */
export const SCREENSAVER_PATHS = {
  /** macOS 15+ (Sequoia以降) */
  MODERN: '/System/Library/CoreServices/ScreenSaverEngine.app',
  /** macOS 14以前 */
  LEGACY: '/System/Library/Frameworks/ScreenSaver.framework/Resources/ScreenSaverEngine.app',
} as const;

/**
 * アプリケーション設定
 */
export const APP = {
  /** アプリケーション名 */
  NAME: 'break-screen',
  /** バージョン */
  VERSION: '1.0.0',
} as const;
