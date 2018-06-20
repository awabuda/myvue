var xlsx = require('node-xlsx');
var fs = require('fs');
var getData = require('./config/request');
// surplus 剩余 trans_amount 提现金额
var xlsxData = [['昵称','总金额','账户剩余金额','提现金额','钱包地址']]
//getData(limit,page,isAddpage) limit每页个数默认为50，page 页数，isAddpage是否页数自动叠加
getData().then(function (res) {
    for (var i in res){
        xlsxData.push([res[i].nickname, res[i].surplus + res[i].trans_amount, res[i].surplus, res[i].trans_amount, res[i].eth_address])
    }
    return xlsxData;
}).then(res=>{
    var buffer = xlsx.build([{
        name: 'sheet1',
        data: res
    }]);
    fs.writeFileSync('punch.xlsx', buffer, {
        'flag': 'w'
    });
    console.log('写入成功');
}).catch(function (e){
    console.log('写入失败---->',JSON.stringify(e));
});
