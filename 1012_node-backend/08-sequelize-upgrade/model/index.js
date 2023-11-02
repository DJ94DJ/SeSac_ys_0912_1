const Sequelize = require("sequelize");
//여기 안에 오퍼레이터 있다


// Sequelize.TEXT()
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

db.Customer = require("./Customer")(sequelize, Sequelize);
db.Orders = require("./Orders")(sequelize, Sequelize);

db.Customer.hasMany(db.Orders, {
    // onDelete: "cascade",
    foreignKey: "custid",
    // targetKey: "custid"
});

db.Orders.belongsTo(db.Customer, {
    // onDelete: "cascade",
    foreignKey:"custid",
    targetKey: "custid"
    // 포린키>>타겟키와 통합
});

module.exports = db;

