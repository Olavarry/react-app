
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    exclude: ['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/Playwright/**', '**/.{idea,git,cache,output,temp}/**', '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*']
    //Above exclude, is to exclude all those folders/files when running the npm run test command to execute unit tests.
  },
})