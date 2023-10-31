const Sequelize = require("sequelize");

Sequelize.TEXT()

const config = require("../config/config.json")["development"];
// const data = {
//     "development-ddd": {}
//     }
//     data["development-ddd"]


const db = {};
const sequelize = new Sequelize(
  config.database, 
  config.username,
  config.password,
  config
);
// Sequelize 객체를 만든다.

db.sequelize = sequelize;
db.Sequelize = Sequelize;
//db = {sequelize: sequelize, Sequelize: Sequelize};

// const Visitor = require("./Visitor")
// db. Visitor = Visitor (sequelize, Sequelize)

db.Visitor = require("./Visitor")(sequelize, Sequelize);
// db. Visitor에는 seqelize로 visitor 테이블을 정의한 객체를 담음

//서비스가 커진다면..
//db.User = require("./User")(sequelize, Sequelize);

module.exports = db;

