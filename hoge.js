const fs = require("fs");
const path = require("path");

// JSONファイルのパス
const filePath = path.join(__dirname, "../json_data/cocktails_jp.json");

// JSONデータを読み込む
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// user_idフィールドを追加
const updatedData = data.map((drink) => ({
  ...drink,
  user_id: null, // user_idを追加し、値をnullに設定
}));

// 更新されたデータを別のファイルに書き込む
const outputPath = path.join(
  __dirname,
  "../json_data/cocktails_jp_with_user_id.json"
);
fs.writeFileSync(outputPath, JSON.stringify(updatedData, null, 2), "utf-8");

console.log(
  "user_idフィールドが追加された新しいJSONファイルを生成しました:",
  outputPath
);
