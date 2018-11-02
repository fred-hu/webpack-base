import 'styles/index.css';
import config from 'tools/config';
/**
 * 热刷新
 */
if (module.hot) {
  module.hot.accept('./index', function () {
  })
}
/**
 * 请求静态文件列表 可做进度条
 */
console.log(config);
axios.get(config.staticlist)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });


  function getComponent() {
    return import('lodash').then(_ => {
      var element = document.createElement('div');
      return element;
    }).catch(error => console.log(error));
  }
  document.onclick = function(){
    getComponent().then(component => {
      console.log(component);
    });
    require.ensure([], function(require) {
      let bundle = require("./test");
      console.log(bundle);
    }, 'bundle');
    require.ensure([], function(require) {
      let img = require("static/ss143.png");
      console.log(img);
      let im = document.createElement('img');
      im.src = img;
      document.body.appendChild(im)
    });
    seajs.use(['test-sea'], function(a) {
      console.log(a);
    });

  }