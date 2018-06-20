# node-excel
```
把数据导成excel表格
拉取代码后
    npm install 
修改request.js 里面的options信息（自己公司的接口）
修改 index.js 里面自己想生成的excel文件名
执行npm run start 或者执行 node index.js
```
#支持读写Excel的node.js模块
```
node-xlsx: 基于Node.js解析excel文件数据及生成excel文件，仅支持xlsx格式文件；
excel-parser: 基于Node.js解析excel文件数据，支持xls及xlsx格式文件；
excel-export : 基于Node.js将数据生成导出excel文件，生成文件格式为xlsx；
node-xlrd: 基于node.js从excel文件中提取数据，仅支持xls格式文件。
我将展示通过node-xlsx提取上传上来的excel文件里的数据，以及生成新的excel文件。
```
# 利用到的模块
```
	http 模块 基于http.request来发起请求；
	fs 模块 基于node fs的读写模块
	promise 模块，避免callback嵌套
	querystring 模块 序列化与反序列化
	node-xlsx 模块  生成写入excel文件

```
#说明
```
	request.js 抛出的方法支持传递  每页的条数，页数(从哪页开始) ，最大页数（请求到哪一页），是否递增
```
		
	



