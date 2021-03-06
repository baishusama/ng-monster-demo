# NgMonsterDemo

## Initialize

```
ng new ng-monster-demo --routing --prefix nm --style=scss
cd ng-monster-demo
ng g library ng-monster --prefix nm --style=scss
```

> - 问题：`ng g library` 的时候指定 `--style=scss` 目前似乎不起作用。
> - 对策：可以手动复制粘贴 `angular.json` 中的 `ng-monster-demo` 下的样式设置（如下所示）到 `ng-monster` 下。
>
> ```json
> "schematics": {
>   "@schematics/angular:component": {
>     "styleext": "scss"
>   }
> },
> ```

## Develop

新建一个组件特性模块：

```
ng g m toaster --project=ng-monster
ng g c toaster --project=ng-monster
```

> TODO: 这里添加一下 `--export` 参数更方便

目前一些需要手动的步骤：

1. 手动在特性模块中 `exports` 组件
2. 在 `public_api.ts` 中暴露特性模块中所有内容
3. 全局替换为 `class` 名添加 `Nm` 前缀
    - `NmToasterModule`
    - `NmToasterComponent`

## Build for Test

```
ng build ng-monster
```

由于 [library 暂不支持 `--watch` 选项](https://github.com/angular/angular-cli/issues/11100)，所以修改 lib 以后只能手动 build。。

## Build for Publish

> 注意：每次打包之前需要更新一下 `package.json` 中的版本号

```
ng build ng-monster --prod
cd dist/ng-monster
npm whoami  # check npm account; need `npm login` first
npm publish
```

## Use

> TODO: 目前只是占了个 npm 的坑。。

在 `src/app/app.module` 引入：

```
import { NmToasterModule } from 'ng-monster';
```

## Reference

- [Library support in Angular CLI 6](https://github.com/angular/angular-cli/wiki/stories-create-library)
- [`ng g library`](https://github.com/angular/angular-cli/wiki/generate-library)
- [How to build a library for Angular apps?](https://medium.com/@tomsu/how-to-build-a-library-for-angular-apps-4f9b38b0ed11)