import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      all: true,
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.stories.{ts,tsx}',
        'src/**/index.ts',
        'src/test-utils/**/*',
        'src/App.tsx',
        'src/main.tsx',
        'src/theme.ts',
        'src/vite-env.d.ts',
      ],
    },
  },
});
