#!/usr/bin/env node

/**
 * break-screen - メインエントリーポイント
 *
 * 毎時50分にmacOSのスクリーンセーバーを起動する常駐アプリ
 */

import process from 'node:process';
import { APP } from './config/constants.js';
import { startScheduler } from './scheduler/scheduler.js';
import { info } from './utils/logger.js';

/**
 * メイン処理
 */
function main(): void {
  info(`${APP.NAME} v${APP.VERSION} started.`);

  const task = startScheduler();

  function shutdown(signal: string): void {
    info(`Received ${signal}. Shutting down gracefully...`);
    task.stop();
    process.exit(0);
  }

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));

  info('Press Ctrl+C to stop.');
}

// 実行
main();
