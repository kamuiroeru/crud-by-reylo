#!/bin/sh
set -eu

cd "$(dirname "$0")"
npm install
npm run setup

if [ ! -e .vscode/settings.json ]; then
  cp .vscode/settings.local.json .vscode/settings.json
else
  echo "既存の .vscode/settings.json を保持しました。必要に応じて .vscode/settings.local.json の内容を追加してください。"
fi
