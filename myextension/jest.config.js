const jestJupyterLab = require('@jupyterlab/testutils/lib/jest-config');

const esModules = [
  '@codemirror',
  '@jupyter/ydoc',
  '@jupyterlab/',
  'lib0',
  'nanoid',
  'vscode-ws-jsonrpc',
  'y-protocols',
  'y-websocket',
  'yjs'
].join('|');

const baseConfig = jestJupyterLab(__dirname);

module.exports = {
  ...baseConfig,
  automock: false,
collectCoverageFrom: [
  'src/**/*.{ts,tsx}',
  '!src/**/*.d.ts',
  '!src/**/.ipynb_checkpoints/*',
  '!src/index.tsx',
  '!src/index.test.ts',
'!src/services/kfpService.*'

],
  coverageReporters: ['lcov', 'text'],
  testRegex: 'src/.*\\.spec\\.tsx?$',
  transformIgnorePatterns: [`/node_modules/(?!${esModules}).+`],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};
