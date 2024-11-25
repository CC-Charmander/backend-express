メソッド：POST
エンドポイント：/creation_history
ボディ：
{
"userId": ユーザーの ID,
"cocktailId": カクテルの ID
}
レスポンス：
201：正常終了
400：リクエスト不正
500：サーバーエラー

# get_creation_history

method: get  
endpoint: /creation_history  
param {  
 cocktailId: Int  
 userId: Int  
}

response:  
200：正常終了  
400：リクエスト不正  
500：サーバーエラー

# knex にて knexfile.ts を使う方法

```sh
npx knex migrate:latest --knexfile knexfile.ts
```
