'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	API_ROOT: 'http://dev.wujiemall.com',  //请求地址接口名
	API_INFO:'http://www.lvcms.com'
})
