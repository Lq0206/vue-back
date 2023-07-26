/*
 * @Author: lqi 575920678@qq.com
 * @Date: 2023-07-26 15:09:57
 * @LastEditors: lqi 575920678@qq.com
 * @LastEditTime: 2023-07-26 15:29:16
 * @FilePath: /vue-back/server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let http = require('http')
let users = [
  {id: 1, name: 'user1'},
  {id: 2, name: 'user2'},
]
let server = http.createServer(function (req,res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.url === '/api/user') {
    res.end(JSON.stringify(users))
  } else {
    res.end('not found')
  }
})

server.listen(8001, () => {
  console.log('服务启动: 8001')
})