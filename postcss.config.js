// console.log('navigator.userAgent---', navigator.userAgent)
// function is_mobile() {
//   var regex_match = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
//   var u = navigator.userAgent;
//   if (null == u) {
//    return true;
//   }
//   var result = regex_match.exec(u);
 
//   if (null == result) {
//    return false
//   } else {
//    return true
//   }
//  }
 

// console.log('is pc---', is_mobile())

module.exports = {
  
plugins: {
  autoprefixer: { }, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
  "postcss-px-to-viewport": {
    unitToConvert: "px", // 要转化的单位
      viewportWidth: 1920, // UI设计稿的宽度
        // viewportHeight: 667, //视口的高度，对应的是设计稿的高度（也可以不配置）
        unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
              fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
                selectorBlackList: ["ignore"], // 指定不转换为视窗单位的类名，
                  minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
                    mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
                      replace: true, // 是否转换后直接更换属性值
                        exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
                          landscape: false // 是否处理横屏情况
  }
}
  };
