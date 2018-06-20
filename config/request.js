var http = require('http');
var querystring = require('querystring');
var Promise = require('promise');
var retry = 0;
var data = [];

module.exports = function (limit,page,maxpage,isAddpage) {
    var config = {
        limit: limit || 50,
        page: page || 0
    }
    return new Promise((resolve, reject) => {
        var getList = function (noadd) {
            if (!noadd) {
                config.page++;
            }
            var content = querystring.stringify(config);
            var options = {
                hostname: 'www.baidu.com', // 你的hostname
                port: 80,
                path: 'dfaf/fa/list?' + content, // 请求路径
                method: 'GET'
            };
            console.log('正在请求第' + config.page + '页====每页'+config.limit +'条数据');
            var listdata = '';
            var req = http.request(options, function (res) {
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    listdata += chunk;
                });
                res.on('end', function () {
                    var n = JSON.parse(listdata || '{}');
                    data = data.concat(n.data || []);
                    if (maxpage && maxpage == config.page) {
                        resolve(data);
                    }else if (n && n.data && n.data.length && !isAddpage) {
                        getList()
                    } else {
                        resolve(data)
                    }
                });

            });

            req.on('error', function (e) {
                if (retry < 4) {
                    getList(retry++);
                } else {
                    retry = 0;
                    console.log('请求失败')
                    resolve(data);
                }
            });
            req.end();


        }
        getList();
    })

}
