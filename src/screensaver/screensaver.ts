/**
 * スクリーンセーバー起動モジュール
 */

import { exec } from 'node:child_process';
import { existsSync } from 'node:fs';
import { promisify } from 'node:util';
import { SCREENSAVER_PATHS } from '../config/constants.js';

const execAsync = promisify(exec);

/**
 * 利用可能なスクリーンセーバーパスを取得
 *
 * macOSのバージョンに応じて、適切なScreenSaverEngine.appのパスを返す
 *
 * @returns スクリーンセーバーのパス。見つからない場合はnull
 */
export function getScreenSaverPath(): string | null {
  // macOS 15+ (Sequoia) のパスを優先チェック
  if (existsSync(SCREENSAVER_PATHS.MODERN)) {
    return SCREENSAVER_PATHS.MODERN;
  }

  // macOS 14以前のパスをフォールバックチェック
  if (existsSync(SCREENSAVER_PATHS.LEGACY)) {
    return SCREENSAVER_PATHS.LEGACY;
  }

  // どちらも見つからない場合
  return null;
}

/**
 * スクリーンセーバーを起動
 *
 * macOSのopen コマンドを使用してScreenSaverEngine.appを起動する
 *
 * @throws {Error} スクリーンセーバーが見つからない、または起動に失敗した場合
 */
export async function startScreenSaver(): Promise<void> {
  const path = getScreenSaverPath();

  if (!path) {
    throw new Error('ScreenSaverEngine.app not found. This app requires macOS.');
  }

  try {
    await execAsync(`open "${path}"`);
  } catch (error) {
    throw new Error(
      `Failed to start screen saver: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}
