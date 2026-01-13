/**
 * ロギングユーティリティ
 */

import { APP } from '../config/constants.js';

/**
 * ログレベル
 */
export type LogLevel = 'info' | 'warn' | 'error';

/**
 * ログを出力
 *
 * @param level ログレベル
 * @param message メッセージ
 * @param data 追加データ（任意）
 */
export function log(level: LogLevel, message: string, data?: unknown): void {
  const timestamp = new Date().toISOString();
  const prefix = `[${APP.NAME}] [${level.toUpperCase()}] ${timestamp}`;
  const args: unknown[] = [prefix, message];

  if (data !== undefined) {
    args.push(data);
  }

  switch (level) {
    case 'info':
      console.log(...args);
      break;
    case 'warn':
      console.warn(...args);
      break;
    case 'error':
      console.error(...args);
      break;
  }
}

/**
 * info ログを出力
 */
export function info(message: string, data?: unknown): void {
  log('info', message, data);
}

/**
 * warn ログを出力
 */
export function warn(message: string, data?: unknown): void {
  log('warn', message, data);
}

/**
 * error ログを出力
 */
export function error(message: string, data?: unknown): void {
  log('error', message, data);
}
