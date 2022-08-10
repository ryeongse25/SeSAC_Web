// DB 세팅하는 파일
const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

// const db = {"sequelize" : sequelize, "Sequelize" : Sequelize};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
// 다른 파일에서 Sequelize가 필요할 수도 있으니 같이 보내준다.

// ./Visitor.js에서 module.exports에 있는 Visitor 함수를 불러오는데 바로 실행시켜서 return된 model 값이 db.Visitor에 담긴다.
db.Visitor = require("./Visitor")(sequelize, Sequelize);
// const a = require("./Visitor");
// const b = a(sequelize, Sequelize);

module.exports = db;