# 快速上手

> motui-uniapp 提供了 `npm` 和 `uni_modules` 两种方式使用组件。

## NPM方式

### 安装

---

::: code-group

```bash [pnpm]
pnpm add motui-uniapp
```

```bash [yarn]
yarn add motui-uniapp
```

```bash [npm]
npm install motui-uniapp
```

:::

### 配置

---

#### 组件导入

::: warning 注意
自动按需导入组件有 `unplugin` 和 `easycom` 两种方式，请勿混用~
:::

##### <Badge type="tip">推荐</Badge> unplugin方式

- 安装插件

  > [@uni-helper/vite-plugin-uni-components](https://github.com/uni-helper/vite-plugin-uni-components)

  ::: code-group

    ```bash [pnpm]
    pnpm add -D @uni-helper/vite-plugin-uni-components
    ```

    ```bash [yarn]
    yarn add --dev @uni-helper/vite-plugin-uni-components
    ```

    ```bash [npm]
    npm install -D @uni-helper/vite-plugin-uni-components
    ```

  :::

- 配置插件

  > vite.config.ts

    ```typescript
    import { defineConfig } from "vite";
    import UniApp from "@dcloudio/vite-plugin-uni";
    import Components from "@uni-helper/vite-plugin-uni-components";
    import { MotResolver } from "motui-uniapp";
    
    // https://vitejs.dev/config
    export default defineConfig({
      // ...
      plugins: [
        // ...
        Components({
          resolvers: [MotResolver()],
        }),
        // 注意，UniApp插件一定要放到后面！
        UniApp()
      ]
    });
    ```

  > 如果使用 `pnpm` 管理依赖，请在项目根目录下的 `.npmrc` 文件中添加如下内容，详细请参考 [issue 389](https://github.com/antfu/unplugin-vue-components/issues/389)

    ```bash
    shamefully-hoist=true # or public-hoist-pattern[]=@vue*
    ```

##### easycom方式

- 配置easycom

  > pages.json（若原本已存在easycom字段，则添加easycom.custom字段中的内容）

    ```json5
    {
      "easycom": {
        "autoscan": true,
        "custom": {
          "^mot-(.*)?-(.*)": "motui-uniapp/components/$1$2/$1$2.vue",
          "^mot-(.*)": "motui-uniapp/components/$1/$1.vue"
        }
      }
      // ...
    }
    ```

- 类型提示

  > tsconfig.json（需要[IDE 支持](https://cn.vuejs.org/guide/typescript/overview.html#ide-support)）

    ```json5
    {
      "compilerOptions": {
        // ...
        "types": ["motui-uniapp/global.d.ts"]
      }
    }
    ```

#### 样式引入

- 安装sass

  > motui-uniapp 依赖 `sass`

  ::: code-group

    ```bash [pnpm]
    pnpm add -D sass
    ```

    ```bash [yarn]
    yarn add --dev sass
    ```

    ```bash [npm]
    npm install -D sass
    ```

  :::

- 全局样式

  > App.vue

    ```html
    <!-- 注意这里的 lang="scss" -->
    <style lang="scss">
      @import "motui-uniapp/styles/index.scss";
    
      // ...
    </style>
    ```

- 样式变量

  > 以下两种方式导入样式变量，任选其一即可

  - uni.scss

    ```scss
    @import "motui-uniapp/styles/variables.scss";
    ```

  - vite.config.ts

    ```typescript
    import { defineConfig } from "vite";
    
    // https://vitejs.dev/config
    export default defineConfig({
      // ...
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@import "motui-uniapp/styles/variables.scss";`
          }
        }
      }
    });
    ```

#### API导入

> 自 `1.7.5` 开始 `motui-uniapp` 提供了一些组合式函数，可以使用插件配置自动按需导入或者手动导入

##### 自动按需导入

- 安装插件

  > [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)

  ::: code-group

    ```bash [pnpm]
    pnpm add -D unplugin-auto-import
    ```

    ```bash [yarn]
    yarn add --dev unplugin-auto-import
    ```

    ```bash [npm]
    npm install -D unplugin-auto-import
    ```

  :::

- 配置插件

  > vite.config.ts

    ```typescript
    import {defineConfig} from "vite";
    import AutoImport from "unplugin-auto-import/vite";
    
    // https://vitejs.dev/config
    export default defineConfig({
      // ...
      plugins: [
        // ...
        AutoImport({
          imports: [
            "vue",
            "uni-app",
            "pinia",
            {
              "motui-uniapp/composables": [
                // 在这里添加需要自动导入的API
                "useToast"
              ]
            }
          ]
        })
      ]
    });
    ```

- 使用

  ```typescript
  // 现在无需手动导入即可直接使用
  const toast = useToast();
  ```

##### 手动导入

```typescript
// motui-uniapp提供的组合式函数都在composables模块下
import { useToast } from "motui-uniapp/composables";

const toast = useToast();
```

### 完成

---

> 配置完成，现在所有的组件都可以直接使用，它将自动完成按需导入

```html
<template>
  <mot-button type="primary">主要按钮</mot-button>

  <!-- 或者（仅限unplugin方式） -->
  <MotButton type="primary">主要按钮</MotButton>
</template>
```

## uni_modules方式

### 下载

---

后续发布到uniapp [插件市场](https://ext.dcloud.net.cn/)，前往 uniapp 插件市场下载 motui-uniapp

### 配置

---

#### 组件导入

> 与上述npm方式中的[easycom方式](#easycom方式)相同

#### 样式引入

> 与上述npm方式中的[样式引入](#样式引入)相同，样式变量部分请使用uni.scss方式

#### API导入

```typescript
// motui-uniapp提供的组合式函数都在composables目录下
import { useToast } from "/uni_modules/motui-uni/components/composables";

const toast = useToast();
```

### 完成

---

> 配置完成，现在所有的组件都可以直接使用，它将自动完成按需导入

```html
<template>
  <mot-button type="primary">主要按钮</mot-button>
</template>
```
