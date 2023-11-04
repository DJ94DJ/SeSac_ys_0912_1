// //시퀄라이저를 위해 테이블을 정의한 것

// function User(Sequelize, DataTypes){
//     return Sequelize.define(
//         "user", //테이블 이름
//         {
//             id: { 
//                 type: DataTypes.STRING(10),
//                 allowNull: false, // =not null true가 기본값
//                 primaryKey: true, // false가 기본값
//             },
//             pw: {
//                 type: DataTypes.STRING(20),
//                 allowNull: false, 
//             },
//             name: {
//                 type: DataTypes.STRING(5),
//                 allowNull: false, 
//             },
//         }, //객체 컬럼 정의
//         {
//             tableName: "User",
//             freezeTableName: true,
//             // sequelize에서 간혹 단수로 지정한 테이블 이름을 복수로 변경 시켜 
//             //sql문을 날릴때 복수로 변경을 시켜 테이블 네임 고정
//         // 직접적으로 SQL을 사용항는 것이 아닌, insert into visitor ~~ => create() => Insert into visitors~~

//             timestamps: false
//             // insert, update 시에 그 시간을 자동을 저장한다. (그래서 막아둠)
//             // creatAt, updateAt 컬럼에 따로 저장함.. =
//         }       
//     );
//     // 모델 (테이블) 정의, sequelize 객체의 define 메소드를 이용해서)
// };

// module.exports = User;


function User(Sequelize, DataTypes) {
    return Sequelize.define(
      'user',
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        userid: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        pw: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      },
      {
        tableName: 'user',
        freezeTableName: true,
        timestamps: false,
      }
    )
  }
  
  module.exports = User
  