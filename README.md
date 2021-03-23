# vite-plugin-react-support-js
vite对jsx语法只认tsx和jsx后缀的文件，可是项目中有很多js类型的文件也是jsx；

# 安装
```

npm install --save-dev vite-plugin-react-support-js
or
yarn add vite-plugin-react-support-js


```
# 使用
```
import vitePlugin from 'vite-plugin-react-support-js';
export default {
    plugins: [
        vitePlugin(),
    ]
}

```

还支持传入其他babel的plugin，数组类型。