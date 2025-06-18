# 创建一个 Vue 应用实例 {#creating-a-vue-application}

## 应用实例 {#application-instance}

每个 Vue 应用都是通过 `createApp` 函数创建一个新的**应用实例**开始的：

```js
import { createApp } from 'vue'

const app = createApp({
  /* 根组件选项 */
})
```

## 挂载应用 {#mounting-the-application}

应用实例必须在调用了 `.mount()` 方法后才会渲染出来。该方法接收一个"容器"参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串：

```html
<div id="app"></div>
```

```js
app.mount('#app')
```

应用实例的内容会被渲染在容器元素里面。容器元素自己将**不会**被视为应用的一部分。

`.mount()` 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。

## 应用配置 {#app-config}

应用实例会暴露一个 `.config` 对象允许我们配置一些应用级的选项，例如定义一个应用级的错误处理器，用来捕获所有子组件上的错误：

```js
app.config.errorHandler = (err) => {
  /* 处理错误 */
}
```

应用实例还提供了一些方法来注册应用范围内可用的资源，例如注册一个组件：

```js
app.component('TodoDeleteButton', TodoDeleteButton)
```

这使得 `TodoDeleteButton` 在应用的任何地方都是可用的。我们会在指南的后续章节中详细讨论组件注册和其他类型的资源注册。

## 多个应用实例 {#multiple-application-instances}

应用实例并不只限于一个。`createApp` API 允许你在同一个页面中创建多个共存的 Vue 应用，而且每个应用都拥有自己的配置和全局资源：

```js
const app1 = createApp({
  /* ... */
})
app1.mount('#container-1')

const app2 = createApp({
  /* ... */
})
app2.mount('#container-2')
```

如果你正在使用 Vue 来增强服务端渲染的 HTML，并且只在一个大型页面中需要 Vue 来控制特定区域，请避免挂载整个页面到单个 Vue 应用实例。相反，创建多个小的应用实例并将它们分别挂载到所需的元素上去。

## 应用实例 API {#application-instance-api}

应用实例 API 参考：[应用实例 API](/api/application) 