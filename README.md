[toc]
# ****项目简介****

>当前项目只是一个简单的学生寝室查询系统 包含了寝室楼、寝室、学生的增删改查

# 项目实现所用技术
- 前端html js css scss vue element(ui 使用了少量) axios
- 后端 nodejs express mysql
- 框架 vuecli element-ui webpack 
- 版本控制工具 git
- 包 管理工具 bable 
# 数据库只创建了4张表
1. [account](寝室楼表)

|   表名   |  描述  |
|:--------:|:------:|
|   user   | 用户名 |
| password |  密码  |

2. [flat](寝室楼表)

|   表名    |   描述   |
|:---------:|:--------:|
|  flatnum  | 寝室楼号 |
| floorsum  | 总楼层数 |
|  roomsum  | 总房间数 |
| starttime | 修建时间 |
3. [room](寝室楼表)

|   表名   |   描述   |
|:--------:|:--------:|
| roomnum  |  寝室号  |
| capacity | 容纳人数 |
|   fee    |   费用   |
| roomtel  | 联系方式 |
| flatnum  | 寝室楼号 |
4. [stu](寝室楼表)

|  表名   |   描述   |
|:-------:|:--------:|
|   id    |   学号   |
|  name   |   姓名   |
|   sex   |   性别   |
| nation  |   民族   |
|  study  |   专业   |
|  class  |   年纪   |
|   tel   | 联系方式 |
| flatnum |  所在楼  |
| roomnum | 所在房间 |
# 运行方法

```flow
st=>start: 找一个空文件夹右键打开git
op=>operation: git clone https://github.com/suxinruolan/friend.git
op1=>operation: cd flatmanager
op2=>operation: npm i
op3=>operation: npm run start
e=>end: 打开浏览器访问当前地址 http:localhost:8080

st->op->op1->op2->op3->e
```

> 细节就不多做描述了 这只是一个简单的不要不要的demo