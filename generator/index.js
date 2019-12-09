module.exports = (api, options, rootOptions) => {
  // 修改 `package.json` 里的字段
  api.extendPackage({
    scripts: {
      test: 'jest'
    }
  })

  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/') || path.startsWith('public/'))
      .forEach(path => delete files[path]);
  });
  
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.render('./template')

  api.render({
    './rendertest.txt'     : './rendertest.txt'
  });
}
