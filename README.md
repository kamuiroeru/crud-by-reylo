# crud-by-reylo

https://github.com/colinhacks/reylo を試して CRUD アプリを作ってみるプロジェクト。

## セットアップ

Node.js 24 以降が必要です。SQLite データベースはローカルの `app.db` に作成します。

```sh
./setup.sh
npm run typecheck
npm start
```

`setup.sh` は依存関係をインストールし、テーブルと VS Code の設定が存在しない場合に作成します。既存のデータと VS Code の設定は保持します。Reylo は `.reylo.yaml` の `direct_url` で開発用データベースを参照します。SQL の型チェックには、先に `./setup.sh` を実行する必要があります。

VS Code では TypeScript 7 拡張機能（TypeScript Native Preview）をインストールし、ワークスペースを信頼して、ワークスペースの TypeScript の使用を許可してください。既存の `.vscode/settings.json` がある場合は、必要に応じて `.vscode/settings.local.json` の内容を追加してください。
