# 本機驗證紀錄

日期：2026-10-01（Asia/Taipei）

| 驗收項目 | 實際證據 | 結果 |
| --- | --- | --- |
| 標題與介紹 | 瀏覽器可讀到標題與 David 介紹 | 通過 |
| 按鈕互動 | 點擊後頁面顯示指定問候文字 | 通過 |
| 手機水平溢出 | 390px 視窗：文件 scrollWidth = 390 | 通過 |
| 桌面水平溢出 | 1440px 視窗：文件 scrollWidth = 1440 | 通過 |
| 重新整理 | 顯示「按下按鈕，試試你的第一個互動。」 | 通過 |
| 鍵盤操作 | 按鈕以 Enter 觸發後顯示指定問候 | 通過 |
| JavaScript 語法 | node --check script.js 成功 | 通過 |

預覽：preview.png。Director 尚未驗收內容與美感。

## 標題修改驗證

依 Director 指令，把 h1 與瀏覽器 title 從「我的第一個網頁」改為「David 的 AI 學習筆記」。CSS、JavaScript 與其他頁面內容未修改。

- 瀏覽器重新載入後，分頁名稱與頁面標題均顯示新文字。
- 點擊原按鈕仍顯示原指定問候文字。
- 390px 與 1440px 寬度的文件 scrollWidth 分別為 390、1440，無水平溢出。
- 更新後成果：preview-updated.png；原成果：preview.png。

Git 已初始化，但尚未建立 commit。GitHub 未設定遠端、未推送；網站未公開發布。
