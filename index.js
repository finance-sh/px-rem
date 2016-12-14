const fs = require('fs');
const path = require('path');
const glob = require('glob');
const config = require('./pxrem.config.js');

const pxToRemRatio = config.pxToRemRatio;


let accMul = function (num1, num2) {
    var m = 0,
        s1 = num1.toString(),
        s2 = num2.toString();
    try {
        m += s1.split(".")[1].length
    } catch (e) {

    };
    try {
        m += s2.split(".")[1].length
    } catch (e) {

    };
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
};
let pxReg = /(\d*?(?:\.\d+)?)px/ig;
let cssReg = /(\b.*?\b\u0020*:)(.*?)(;|"|\r\n)/g;
glob(config.patterns, {}, function (err, files) {
	files.forEach(function (v, i, o) {
		let newFilePath = v.replace(/(.*\/)?(.*?)(\..*?)/, function (m, n1, n2, n3) {
			return (n1? n1: '') + (n2 + '-px2rem') + (n3? n3: '');  
		});
		fs.readFile(v, 'utf-8', function (err, data) {
			let newData = data.replace(cssReg, function (m, n1, n2, n3) {
				return n1 + n2.replace(pxReg, function (pxm, pxn1) {
					if (!config.convertBorder1px && /border/i.test(n1) && pxn1 === '1') {
						return pxm;
					}
					else {
						return accMul(pxn1, pxToRemRatio) + 'rem';
					}
				}) + n3;
				
			});
			fs.writeFile(newFilePath, newData, 'utf-8', function () {

			});
		});
	});
});



