/*
 * @Github: 我没有
 * @Author: 李鹏帅
 * @如果有bug，那肯定不是我的锅，嘤嘤嘤
 * @since: 2019-11-21 09:50:23
 * @lastTime: 2019-11-21 15:30:24
 * @LastAuthor: Do not edit
 * @message: 封装了用与本地请求的api接口 这里使用了express框架 
 */

const express = require('express')
const router = express.Router()//使用express 路由功能
const flat = require('./mysql.js')

//查询所有的宿舍
router.get('/findAllFlats', async function (req, res) {
  let result = await flat.findAllFlats()
  res.json({ code: 200, msg: 'ok', result: result })
})
//查询所有的房间
router.get('/findAllRooms', async function (req, res) {
  let result = await flat.findAllRooms()
  res.json({ code: 200, msg: 'ok', result: result })
})
//查询所有的学生
router.get('/findAllStus', async function (req, res) {
  let result = await flat.findAllStus()
  res.json({ code: 200, msg: 'ok', result: result })
})
//查询所有账号密码
router.get('/findAllUsers', async function (req, res) {
  let result = await flat.findAllUsers()
  res.json({ code: 200, msg: 'ok', result: result })
})
//根据公寓id查找
router.get('/findFlatById', async function (req, res) {
  let result = await flat.findFlatById(req.query)
  res.json({ code: 200, msg: 'ok', result: result })
})
//根据房间id查找
router.get('/findRoomById', async function (req, res) {
  let result = await flat.findRoomById(req.query)
  res.json({ code: 200, msg: 'ok', result: result })
})
//根据学生id查找
router.get('/findStuById', async function (req, res) {
  let result = await flat.findStuById(req.query)
  res.json({ code: 200, msg: 'ok', result: result })
})
//通过学生找学生
router.get('/findStuByStudy', async function (req, res) {
  let result = await flat.findStuByStudy(req.query)
  res.json({ code: 200, msg: 'ok', result: result })
})
//查找账号密码用于登陆
router.get('/findUserById', async function (req, res) {
  let result = await flat.findUserById(req.query)
  res.json({ code: 200, msg: 'ok', result: result })
})
//增加公寓
router.post('/addFlat', async function (req, res) {
  let result = await flat.addFlat(req.body)
  res.json({ code: 200, msg: 'ok', result: result })
})
//增加房间
router.post('/addRoom', async function (req, res) {
  let result = await flat.addRoom(req.body)
  res.json({ code: 200, msg: 'ok', result: result })
})
//增加学生
router.post('/addStu', async function (req, res) {
  let result = await flat.addStu(req.body)
  res.json({ code: 200, msg: 'ok', result: result })
})
//更新公寓
router.post('/updateFlat', async function (req, res) {
  let result = await flat.updateFlat(req.body)
  res.json({ code: 200, msg: 'ok', result: result })
})
//更新房间
router.post('/updateRoom', async function (req, res) {
  let result = await flat.updateRoom(req.body)
  res.json({ code: 200, msg: 'ok', result: result })
})
//更行学生
router.post('/updateStu', async function (req, res) {
  let result = await flat.updateStu(req.body)
  res.json({ code: 200, msg: 'ok', result: result })
})
//删除公寓
router.post('/deleteFlat', async function (req, res) {
  let result = await flat.deleteFlat(req.body)
  res.json({ code: 200, msg: 'ok', result: result })
})
//删除房间
router.post('/deleteRoom', async function (req, res) {
  let result = await flat.deleteRoom(req.body)
  res.json({ code: 200, msg: 'ok', result: result })
})
//删除学生
router.post('/deleteStu', async function (req, res) {
  let result = await flat.deleteStu(req.body)
  res.json({ code: 200, msg: 'ok', result: result })
})
//展示房间排名
router.get('/showRoomnumCount', async function (req, res) {
  let result = await flat.showRoomnumCount(req.query)
  res.json({ code: 200, msg: 'ok', result: result })
})

module.exports = router
