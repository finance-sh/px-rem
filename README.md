# px-rem

a tool to convert px to rem

##how to use

    npm install px-rem -g
    
    px2rem
    
you can set a config
    
    px2rem --config pxrem.config.js
    
##config

default config:
    ```javascript
    {
	      patterns: "**/*.css",
	      pxToRemRatio: 0.01,
	      convertBorder1px: true
    }
    ```
    
you can create a new file in the current directory, for example: pxrem.config.js
    
    ```javascript
    module.exports = {
	      patterns: "./WrcIosselect/lib/WrcIosselect.css",
	      pxToRemRatio: 0.01,
	      convertBorder1px: true
    };
    ```
    
then you can run like this: 
    
    px2rem --config pxrem.config.js
    
##parammeter

    patterns: visite https://www.npmjs.com/package/glob to see pattern
    
    pxToRemRatio: the ratio of px and rem
    
    convertBorder1px: whether or not to convert 1 pixel wide border
    
    
---------------------------------------------------------------------------------------------------------------


将px转换为rem的工具

##怎样使用
    
安装：
    
    npm install px-rem -g
    
然后跑下命令
    
    px2rem
    
你也可以设置一个配置文件
    
    
    px2rem --config pxrem.config.js
    
##config

默认 config:
    ```javascript
    {
	      patterns: "**/*.css",
	      pxToRemRatio: 0.01,
	      convertBorder1px: true
    }
    ```
    
你也可以在当前文件夹下新建一个配置文件, 比如: pxrem.config.js
    
    ```javascript
    module.exports = {
	      patterns: "./WrcIosselect/lib/WrcIosselect.css",
	      pxToRemRatio: 0.01,
	      convertBorder1px: true
    };
    ```
    
然后你可以在命令行输入时作为参数带入： 
    
    px2rem --config pxrem.config.js
    
##参数说明

    patterns: 访问 https://www.npmjs.com/package/glob 然后查看patterns参数
    
    pxToRemRatio: px和rem的比值，默认0.01
    
    convertBorder1px: 是否转换1px宽度的border,默认不转换
    
##pxToRemRatio 说明
    
###如果你是使用adaptive.js,https://github.com/finance-sh/adaptive  或者使用1px设计图对应0.01rem的方法：
    
    1，如果是基于设计图开发，这个值就是0.01
    
    2，如果是将width=device-width下，以px为单位的老css文件转换为rem, 如果新的设计图为640，这个值一般为 (1 * 2) / 100, 如果新的设计图为750，这个值为 (7 / 3 * 1) / 100
    
###如果你使用的是手淘解决方案Flexible或类似原理的自适应方案

    1，如果是基于设计图，这个值是 1 / (设计图宽度 / 10)
    
    2，如果是将width=device-width下，以px为单位的老css文件转换为rem, 如果新的设计图为640，这个值一般为 1 / (640 / 10) * 2, 如果新的设计图为750，这个值为 1 / (750 / 10) * 2.3333
    
