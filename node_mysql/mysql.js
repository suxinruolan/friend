/*
 * @Github: 我没有
 * @Author: 李鹏帅
 * @如果有bug，那肯定不是我的锅，嘤嘤嘤
 * @since: 2019-11-21 09:50:23
 * @lastTime: 2019-11-21 19:05:56
 * @LastAuthor: Do not edit
 * @message: 这里主要实现了数据库的增删改查功能
 */
var mysql = require('mysql')
var config = require('./default.js')
var pool = mysql.createPool({
  host: config.database.host,
  user: config.database.user,
  port: config.database.port,
  password: config.database.password,
  database: config.database.database
})
// node connect to mysql
let query = function (sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.log(err)
      } else {
        console.log('数据库连接成功!');
        connection.query(sql, (err, rows) => {
          if (err) {
            console.log(err)
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}
// 创建table-cartoon表

//login
let findUserById = function (values) {
  let sql = `select password from account where user='${values.user}';`
  return query(sql)
}
//register
let addUser = function (values) {
  let addsql = `insert into account (user,password) values ("${values.user}","${values.password}");`
  return query(addsql, values)
}

//insert
let addFlat = function (values) {
  let addsql = `insert into flat (flatnum,floorsum,roomsum,starttime) values ("${values.flatnum}","${values.floorsum}","${values.roomsum}","${values.starttime}");`
  return query(addsql, values)
}
let addRoom = function (values) {
  let addsql = `insert into room (roomnum,capacity,fee,roomtel,flatnum) values ("${values.roomnum}","${values.capacity}","${values.fee}","${values.roomtel}","${values.flatnum}");`
  return query(addsql, values)
}
let addStu = function (values) {
  let addsql = `insert into stu (id,name,sex,nation,study,class,tel,flatnum,roomnum) values ("${values.id}","${values.name}","${values.sex}","${values.nation}","${values.study}","${values.class}","${values.tel}","${values.flatnum}","${values.roomnum}");`
  return query(addsql, values)
}
// select
let findAllFlats = function () {
  let sql = `select * from flat;`
  return query(sql)
}
let findAllRooms = function () {
  let sql = `select * from room;`
  return query(sql)
}
let findAllStus = function () {
  let sql = `select * from stu;`
  return query(sql)
}
// select details
let findFlatById = function (values) {
  let sql = `select * from flat where flatnum=${values.flatnum};`
  return query(sql)
}
let findRoomById = function (values) {
  let sql = `select * from room where roomnum='${values.roomnum}';`
  return query(sql)
}
let findStuById = function (values) {
  let sql = `select * from stu where id='${values.id}';`
  return query(sql)
}
let findStuByStudy = function (values) {
  let sql = `select * from stu where study='${values.study}';`
  return query(sql)
}
// updata detaiils
let updateFlat = function (values) {
  let updatesql = `update flat set flatnum="${values.flatnum}",floorsum="${values.floorsum}",roomsum="${values.roomsum}",starttime="${values.starttime}" where flatnum=${values.flatnum};`
  return query(updatesql)
}
let updateRoom = function (values) {
  let updatesql = `update room set roomnum="${values.roomnum}",capacity="${values.capacity}",fee="${values.fee}",roomtel="${values.roomtel}",flatnum="${values.flatnum}" where roomnum=${values.roomnum};`
  return query(updatesql)
}
let updateStu = function (values) {
  let updatesql = `update stu set id="${values.id}",name="${values.name}",sex="${values.sex}",nation="${values.nation}",study="${values.study}",class="${values.class}",tel="${values.tel}",flatnum="${values.flatnum}",roomnum="${values.roomnum}" where id=${values.id};`
  return query(updatesql)
}
// delete details
let deleteFlat = function (values) {
  let deletesql = `delete from flat where flatnum=${values.flatnum};`
  return query(deletesql)
}
let deleteRoom = function (values) {
  let deletesql = `delete from room where roomnum=${values.roomnum};`
  return query(deletesql)
}
let deleteStu = function (values) {
  let deletesql = `delete from stu where id=${values.id};`
  return query(deletesql)
}
let showRoomnumCount = function (values) {
  let showrc = `select count(*) from stu where roomnum=${values.roomnum};`
  return query(showrc)
}

module.exports = {
  addFlat,
  addRoom,
  addStu,
  addUser,
  findAllFlats,
  findAllRooms,
  findAllStus,
  findFlatById,
  findRoomById,
  findStuById,
  findStuByStudy,
  findUserById,
  updateFlat,
  updateRoom,
  updateStu,
  deleteFlat,
  deleteRoom,
  deleteStu,
  showRoomnumCount
}
