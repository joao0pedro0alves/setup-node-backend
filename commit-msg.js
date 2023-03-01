const fs = require('fs');
const path = require('path');

const PREFIXES = {
  feat: '✨',
  fix: '🐛',
  docs: '📝',
  style: '💄',
  refactor: '🔨',
  test: '🚨',
  chore: '🧹'
};

const COMMIT_MSG_PATH = process.env.HUSKY_GIT_PARAMS;
const COMMIT_MSG = fs.readFileSync(COMMIT_MSG_PATH, 'utf-8').trim();
const PREFIX_REGEX = /^(\w+)(\(.+\))?:(.*)/;

const match = PREFIX_REGEX.exec(COMMIT_MSG);

if (!match) {
  console.error(`Invalid commit message format: ${COMMIT_MSG}`);
  process.exit(1);
}

const [, type, scope, subject] = match;

if (!PREFIXES[type]) {
  console.error(`Invalid commit type: ${type}`);
  process.exit(1);
}

const prefix = PREFIXES[type];
const newMsg = `${prefix} ${subject}`;

fs.writeFileSync(COMMIT_MSG_PATH, newMsg);
