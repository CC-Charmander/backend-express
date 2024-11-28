## 作成履歴 API

### 作成履歴作成

| 項目             | 内容                                                        |
| ---------------- | ----------------------------------------------------------- |
| メソッド         | POST                                                        |
| エンドポイント   | /creation_history                                           |
| リクエストボディ | `{ "userId": ユーザーの ID, "cocktailId": カクテルの ID }`  |
| レスポンス       | 201：正常終了<br>400：リクエスト不正<br>500：サーバーエラー |

### 作成履歴取得

| 項目                 | 内容                                                        |
| -------------------- | ----------------------------------------------------------- |
| メソッド             | GET                                                         |
| エンドポイント       | /creation_history                                           |
| リクエストパラメータ | `{ "cocktailId": Int, "userId": Int }`                      |
| レスポンス           | 200：正常終了<br>400：リクエスト不正<br>500：サーバーエラー |

## レシピ API

### レシピ一覧取得

| 項目                 | 内容                                                        |
| -------------------- | ----------------------------------------------------------- |
| メソッド             | GET                                                         |
| エンドポイント       | /recipes                                                    |
| リクエストパラメータ | `"cocktailId": Int`                                         |
| レスポンス           | 200：正常終了<br>400：リクエスト不正<br>500：サーバーエラー |

### レシピ作成(投稿)

=======

## 材料 API

### 材料一覧取得

| 項目           | 内容                                                        |
| -------------- | ----------------------------------------------------------- |
| メソッド       | GET                                                         |
| エンドポイント | /ingredients                                                |
| レスポンス     | 200：正常終了<br>400：リクエスト不正<br>500：サーバーエラー |

| 項目                 | 内容                                                                                                                                                                                                                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| メソッド             | POST                                                                                                                                                                                                                                      |
| エンドポイント       | /recipes                                                                                                                                                                                                                                  |
| リクエストパラメータ | `{ "strDrink": string, "strTags"?: string, "strCategory"?: string, "strAlcoholic"?: string, "strGlass"?: string, "strInstructions"?: string, "strDrinkThumb": string, "ingredients": string[], "measures": number[], "user_id": number }` |
| レスポンス           | 200：正常終了<br>400：リクエスト不正<br>500：サーバーエラー                                                                                                                                                                               |

## いいね API

### いいね作成

| 項目                 | 内容                                                        |
| -------------------- | ----------------------------------------------------------- |
| **メソッド**         | POST                                                        |
| **エンドポイント**   | /favorites                                                  |
| **リクエストボディ** | `{ "userId": ユーザーの ID, "cocktailId": カクテルの ID }`  |
| **レスポンス**       | 201：正常終了<br>400：リクエスト不正<br>500：サーバーエラー |

### いいね取得

| 項目                     | 内容                                                        |
| ------------------------ | ----------------------------------------------------------- |
| **メソッド**             | GET                                                         |
| **エンドポイント**       | /favorites                                                  |
| **リクエストパラメータ** | `"cocktailId": カクテルのID, "userId": ユーザーのID`        |
| **レスポンス**           | 200：正常終了<br>400：リクエスト不正<br>500：サーバーエラー |

### いいね数取得

| 項目                     | 内容                                                        |
| ------------------------ | ----------------------------------------------------------- |
| **メソッド**             | GET                                                         |
| **エンドポイント**       | /favorites                                                  |
| **リクエストパラメータ** | `"cocktailId": カクテルのID`                                |
| **レスポンス**           | 200：正常終了<br>400：リクエスト不正<br>500：サーバーエラー |
| **レスポンスボディ**     | {"favoriteNum": いいね数}                                   |

### いいね削除

| 項目                     | 内容                                                        |
| ------------------------ | ----------------------------------------------------------- |
| **メソッド**             | DELETE                                                      |
| **エンドポイント**       | /favorites                                                  |
| **リクエストパラメータ** | `"cocktailId": カクテルのID, "userId": ユーザーのID `       |
| **レスポンス**           | 200：正常終了<br>400：リクエスト不正<br>500：サーバーエラー |

