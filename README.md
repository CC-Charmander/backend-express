## 作成履歴 API

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

## レシピ一覧 API

### レシピ一覧取得

| 項目                 | 内容                                                        |
| -------------------- | ----------------------------------------------------------- |
| メソッド             | GET                                                         |
| エンドポイント       | /recipes                                                    |
| リクエストパラメータ | `"cocktailId": Int`                                         |
| レスポンス           | 200：正常終了<br>400：リクエスト不正<br>500：サーバーエラー |

## knex にて knexfile.ts を使う方法

```sh
npx knex migrate:latest --knexfile knexfile.ts
```
