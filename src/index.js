import babelCore from '@babel/core';

const fileRegex = /\.js$/

export default function vitePluginReactJsSupport(plugins) {
  return {
    name: 'vite-plugin-react-js-support',
    transform(source, id) {
      if (fileRegex.test(id) && id.indexOf('node_modules') === -1) {
        const ps = Array.isArray(plugins) ? plugins : [];
        return {
          code: compileFileToJS(source, ps),
          map: null // provide source map if available
        }
      }
    }
  }
}

function compileFileToJS(source, plugins) {
  const result = babelCore.transformSync(source, {
    plugins: ["@babel/plugin-transform-react-jsx", ...plugins],
  })
  return result.code;
}