/**
 * スクリーンセーバー起動ロジックのテスト
 */

import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { SCREENSAVER_PATHS } from '../src/config/constants.js';
import { getScreenSaverPath } from '../src/screensaver/screensaver.js';

describe('screensaver', () => {
  describe('getScreenSaverPath', () => {
    it('should return a valid path or null', () => {
      const path = getScreenSaverPath();

      if (path !== null) {
        // パスが返された場合、それが定義済みのパスのいずれかであることを確認
        const validPaths = Object.values(SCREENSAVER_PATHS);
        expect(validPaths).toContain(path);

        // 実際にファイルが存在することを確認
        expect(existsSync(path)).toBe(true);
      } else {
        // nullの場合、いずれのパスも存在しないことを確認
        expect(existsSync(SCREENSAVER_PATHS.MODERN)).toBe(false);
        expect(existsSync(SCREENSAVER_PATHS.LEGACY)).toBe(false);
      }
    });
  });
});
