#  my-app

## 项目运行

- 下载代码之后装包

```javascript
cnpm i
```

- 左侧菜单栏修改

  全局搜索 `MenuComponent.vue`这个文件，在`created`方法里面修改，主要有`icon` `name` `path` 3个`key`

- 左上角的标题修改

  在路由里面`routes.js`，每个路由的 `meta` 信息

  ```JavaScript
  title: [{
  	mainMenu: 'demo1--此处在路由中设置'
  }]
  ```

  

- `websocket`

  `websocket`是在 `TitleComponent.vue` 文件中初始化的，数据返回后，通过触发 `vuex` 下面 `websocket` 中的 `getTagOfChange` 方法来表示数据的变化，在相应的 `scp`中监听 `tagOfChange`这个全局属性