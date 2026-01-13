/**
 * cronスケジューラモジュール
 */

import cron from 'node-cron';
import { SCHEDULE } from '../config/constants.js';
import { startScreenSaver } from '../screensaver/screensaver.js';
import { error, info } from '../utils/logger.js';

/**
 * スケジューラを開始
 *
 * 定義されたcron式に従って、スクリーンセーバーを定期起動する
 *
 * @returns cronタスク
 */
export function startScheduler(): cron.ScheduledTask {
  info(`Scheduler started. Triggering at minute ${SCHEDULE.TRIGGER_MINUTE} every hour.`);

  return cron.schedule(SCHEDULE.CRON_EXPRESSION, async () => {
    info('Starting screen saver...');

    try {
      await startScreenSaver();
      info('Screen saver started successfully.');
    } catch (err) {
      error('Failed to start screen saver:', err instanceof Error ? err.message : String(err));
    }
  });
}
