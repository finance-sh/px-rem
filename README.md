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
    ```javascript
    
    you can create a new file in the current directory, for example: pxrem.config.js
    ```javascript
    module.exports = {
	      patterns: "./WrcIosselect/lib/WrcIosselect.css",
	      pxToRemRatio: 0.01,
	      convertBorder1px: true
    };
    ```javascript
    
    then you can run like this: px2rem --config pxrem.config.js
    
##parammeter

    patterns: visite https://www.npmjs.com/package/glob to see pattern
    
    pxToRemRatio: the ratio of px and rem
    
    convertBorder1px: whether or not to convert 1 pixel wide border
    
