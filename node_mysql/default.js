/*
 * @Github: 我没有
 * @Author: 李鹏帅
 * @如果有bug，那肯定不是我的锅，嘤嘤嘤
 * @since: 2019-11-21 09:50:23
 * @lastTime: 2019-11-21 14:58:43
 * @LastAuthor: Do not edit
 * @message: 这里主要用来连接数据库  从上到下  ip地址  用户名 密码  端口  要连接的数据库 
 */
// 数据库配置
const config = {
  database: {
    host: '127.0.0.1',
    user: 'root',
    password: 'lps123456',
    port: '3306',
    database: 'student'
  }
}
module.exports = config
