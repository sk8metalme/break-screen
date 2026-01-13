/**
 * スケジューラのテスト
 */

import { describe, expect, it } from 'vitest';
import { startScheduler } from '../src/scheduler/scheduler.js';

describe('scheduler', () => {
  describe('startScheduler', () => {
    it('should return a ScheduledTask', () => {
      const task = startScheduler();

      // ScheduledTaskオブジェクトが返されることを確認
      expect(task).toBeDefined();
      expect(typeof task.stop).toBe('function');

      // テスト終了時にタスクを停止
      task.stop();
    });
  });
});
