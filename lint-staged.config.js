module.exports = {
  '*': ['eslint --fix --nor-warn-ignored'],
  '**/*.ts?(x)': () => 'npm run types:check'
}
