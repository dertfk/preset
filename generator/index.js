module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  // api.extendPackage({
    // scripts: {
      // test: 'jest'
    // }
  // })
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  // api.render('./template')

  // api.render({
    // './prettify.js'     : './prettify.js'
  // });
  
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  // api.render('./template')

  api.render({
    './rendertest.txt'     : './rendertest.txt'
  });
}