/**
 * PM2 ecosystem configuration
 *
 * Usage:
 *   pm2 start ecosystem.config.js
 *   pm2 stop break-screen
 *   pm2 restart break-screen
 *   pm2 logs break-screen
 */

export default {
  apps: [
    {
      name: 'break-screen',
      script: './dist/index.js',
      interpreter: 'node',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '100M',
      env: {
        NODE_ENV: 'production',
      },
      error_file: './logs/error.log',
      out_file: './logs/output.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
    },
  ],
};
