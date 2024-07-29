# Welcome to tailwindVite + JS + tailwindcss v3 👋

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000)

## 安裝

首先，請確保你已經安裝了 Node.js。然後，在專案目錄下運行以下命令來安裝所有必要的依賴：

```sh
npx degit ttppoo121440/tailwind-tempalte your-project-name
npm install
```

## 使用

在安裝完成後，你可以使用以下命令來啟動開發伺服器：

```sh
npm start
```

這將會啟動 Vite 開發伺服器，並且在你的瀏覽器中打開專案。

## 使用說明

### 在 JavaScript 中使用 `@/`

在專案中，你可以使用 `@/` 作為路徑別名，來簡化引入檔案的路徑。這樣可以避免使用相對路徑，讓你的代碼更乾淨。例如：

```javascript
import MyComponent from '@/components/MyComponent';
```

`@` 別名在 `vite.config.js` 中配置，默認指向 `src` 目錄。

### `.env.production` 說明

`.env.production` 檔案用於設定生產環境的變數。請注意，在將專案上傳至 GitHub 或其他公共儲存庫之前，請確保不洩漏任何敏感資訊。如果需要在專案中使用這些變數，請確保在上傳之前替換適當的值。

### `<%= base %>` 的使用說明

在 HTML 模板中使用 `<%= base %>` 語法時，它是 EJS 模板引擎的插值語法。這樣的語法可以用來插入變數的值。例如：

```html
<a href="<%= base %>index.html">首頁</a>
```

這樣 `<%= base %>` 會被 EJS 模板引擎替換成對應的變數值，通常用於動態生成連結地址或資源路徑。

### Tailwind CSS 客製化

在 `tailwind.config.js` 中，你可以客製化 Tailwind 的主題和插件。以下是一些常見的客製化範例：

- **自訂顏色**：

  ```javascript
  // tailwind.config.js
  module.exports = {
    theme: {
      extend: {
        colors: {
          primary: '#3490dc',
          secondary: '#ffed4a',
        },
      },
    },
  };
  ```

  在 HTML 文件中使用這些顏色：

  ```html
  <body class="bg-primary text-white">
    <header class="bg-secondary p-4">
      <h1 class="text-3xl">歡迎來到我們的網站</h1>
    </header>
    <main class="p-8">
      <p class="text-primary">這是一些自訂顏色的文字。</p>
    </main>
  </body>
  ```

## GitHub Pages 部署

要將專案部署到 GitHub Pages，請按照以下步驟操作：

1. 在 `package.json` 文件中，將 `"homepage"` 設置為你的 GitHub Pages URL。例如：

   ```json
   "homepage": "https://帳號.github.io/倉庫名稱"
   ```

   請將 `"帳號"` 替換為你的 GitHub 用戶名，`"倉庫名稱"` 替換為你的 GitHub 倉庫名稱。

2. 使用以下命令來部署專案：

   ```sh
   npm run deploy
   ```

   這會將 `dist` 目錄中的檔案部署到 GitHub Pages。

## 資料夾結構

```plaintext
│  .env                        # 環境變數檔案，用於存儲專案的配置環境變數
│  .env.production             # 生產環境的環境變數檔案（如需上傳到 GitHub 請自行修改檔案內容，確保不洩漏敏感資訊）
│  .gitignore                   # Git 忽略檔案列表，用於指定哪些檔案和資料夾不納入版本控制
│  .prettierrc                  # Prettier 配置檔案，用於代碼格式化
│  eslint.config.js             # ESLint 配置檔案，用於代碼質量和風格檢查
│  jsconfig.json                # JavaScript 配置檔案，幫助 IDE 識別專案的路徑和設置
│  package-lock.json            # 鎖定版本的依賴檔案，確保團隊成員使用相同的版本
│  package.json                 # 專案的依賴管理檔案，定義了專案的依賴、腳本等
│  postcss.config.js            # PostCSS 配置檔案，處理 CSS 的插件配置
│  README.md                    # 專案的說明檔案，包含專案介紹、安裝和使用指南
│  tailwind.config.js           # Tailwind CSS 配置檔案，自訂 Tailwind 的主題和插件
│  vite.config.js               # Vite 配置檔案，用於配置 Vite 的構建和開發設置
│
├─.vscode                      # Visual Studio Code 的配置資料夾
│      extensions.json          # 推薦的 VSCode 擴展列表
│      settings.json            # VSCode 編輯器的設置檔案
│
├─public                       # 靜態資源資料夾，Vite 構建時會將這些檔案複製到輸出目錄
│      vite.svg                 # Vite 的官方 SVG 圖示
│
└─src                          # 原始碼資料夾
    │  main.js                 # 專案的入口檔案
    │
    ├─assets                   # 靜態資源資料夾，包含專案的圖片和樣式
    │  ├─images                # 圖片資源資料夾
    │  │      vite.svg         # 專案的 SVG 圖片
    │  │
    │  └─styles                # 樣式檔案夾
    │          tailwind.css    # Tailwind CSS 的主要樣式檔案
    │
    ├─components               # 元件資料夾，包含專案中的 EJS 模板和可重用元件
    │      logo.ejs            # 示例 EJS 模板
    │
    ├─layout                   # 布局資料夾，可能包含應用的布局元件或模板
    └─pages                    # 頁面資料夾，包含 HTML 頁面檔案
            index.html          # 首頁 HTML 檔案
            info.html           # 資訊頁 HTML 檔案
```

## 作者

👤 **兔子**

- Github: [@ttppoo121440](https://github.com/ttppoo121440)

```

```
