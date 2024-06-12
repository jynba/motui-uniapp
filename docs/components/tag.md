# Tag 标签

### 介绍

用于标记和分类的标签。

### 基础用法

```html
<mot-tag type="primary">标签</mot-tag>
<mot-tag type="success">标签</mot-tag>
<mot-tag type="danger">标签</mot-tag>
<mot-tag type="warning">标签</mot-tag>
```

### 样式风格

```html
<!-- 空心样式 -->
<mot-tag plain>标签</mot-tag>

<!-- 圆角样式 -->
<mot-tag type="primary" round>标签</mot-tag>

<!-- 标记样式 -->
<mot-tag type="primary" mark>标签</mot-tag>

<!-- 可关闭标签 -->
<mot-tag v-if="show" type="primary" closeable @close="close">标签</mot-tag>

<!-- 关闭图标大小 -->
<mot-tag type="primary" closeable close-icon-size="8">标签</mot-tag>
```

```typescript
const show = ref<boolean>(true);

function close() {
  show.value = false;
}
```

### 颜色自定义

```html
<!-- 背景颜色 -->
<mot-tag custom-color="#fa685d">标签</mot-tag>

<!-- 文字颜色 -->
<mot-tag custom-color="#e9e9e9" text-color="#999999">标签</mot-tag>

<!-- 空心颜色 -->
<mot-tag custom-color="#fa2400" plain>标签</mot-tag>
```

### 禁用状态

> 自 `1.7.7` 开始支持禁用标签，禁用后不会触发 `click` 和 `close` 事件

```html
<!-- 普通标签 -->
<mot-tag type="primary" disabled @click="onClick">标签</mot-tag>

<!-- 可关闭标签 -->
<mot-tag v-if="show" type="primary" closeable disabled @close="close">标签</mot-tag>
```

## API

### Props

| 参数                      | 说明                                               | 类型              | 默认值     |
|-------------------------|--------------------------------------------------|-----------------|---------|
| type                    | 标签类型，可选值为 `primary`、`success`、`danger`、`warning` | string          | default |
| custom-color            | 标签颜色                                             | string          | -       |
| text-color              | 文本颜色                                             | string          | -       |
| plain                   | 是否为空心样式                                          | boolean         | `false` |
| round                   | 是否为圆角样式                                          | boolean         | `false` |
| mark                    | 是否为标记样式                                          | boolean         | `false` |
| closeable               | 是否为可关闭标签                                         | boolean         | `false` |
| close-icon-size `1.7.7` | 关闭图标大小                                           | number / string | 11px    |
| disabled `1.7.7`        | 是否禁用                                             | boolean         | `false` |

### Slots

| 名称      | 说明     |
|---------|--------|
| default | 标签显示内容 |

### Events

| 事件名   | 说明   | 回调参数    |
|-------|------|---------|
| click | 点击事件 | `event` |
| close | 关闭事件 | `event` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](/components/configprovider)。

| 名称                                          | 默认值           |
|---------------------------------------------|---------------|
| --mot-tag-height                            | auto          |
| --mot-tag-padding `1.7.8`                   | 0 4px         |
| --mot-tag-font-size                         | 12px          |
| --mot-tag-default-color                     | #fff          |
| --mot-tag-border-width                      | 1px           |
| --mot-tag-default-border-radius             | 4px           |
| --mot-tag-round-border-radius               | 8px           |
| --mot-tag-mark-border-radius                | 0 12px 12px 0 |
| --mot-tag-default-background-color          | #000          |
| --mot-tag-primary-background-color          | #3460fa       |
| --mot-tag-success-background-color          | #4fc08d       |
| --mot-tag-danger-background-color           | #df3526       |
| --mot-tag-warning-background-color          | #f3812e       |
| --mot-tag-plain-background-color            | transparent   |
| --mot-tag-disabled-background-color `1.7.7` | #ccc          |
| --mot-tag-disabled-close-color `1.7.7`      | #aaa          |
