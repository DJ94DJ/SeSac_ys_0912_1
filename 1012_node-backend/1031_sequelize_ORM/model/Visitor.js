// 테이블의 구조 정의
// ORM은 객체와 db의 table을 매핑하는 기술
// sequelize를 이용해 table 구조를 정의할 필요가 있다.

function Visitor(Sequelize, DataTypes){
    return Sequelize.define(
        "visitor", //테이블 이름
        {
            id: { 
                type: DataTypes.INTEGER,
                allowNull: false, // =not null true가 기본값
                primaryKey: true, // false가 기본값
                autoIncrement: true // false가 기본값
                //`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
            },
            username: {
                type: DataTypes.STRING(10),
                //allowNull: false, // =not null true가 기본값이니 안적어도됨 = true


               //`username` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
            },
            comment: {

                // mediumtext
                type: DataTypes.TEXT("medium")
               //`comment` mediumtext COLLATE utf8mb4_unicode_ci
            },
        }, //객체 컬럼 정의
        {
            tableName: "Visitor",
            freezeTableName: true,
            // sequelize에서 간혹 단수로 지정한 테이블 이름을 복수로 변경 시켜 
            //sql문을 날릴때 복수로 변경을 시켜 테이블 네임 고정
        // 직접적으로 SQL을 사용항는 것이 아닌, insert into visitor ~~ => create() => Insert into visitors~~

            timestamps: false
            // insert, update 시에 그 시간을 자동을 저장한다. (그래서 막아둠)
            // creatAt, updateAt 컬럼에 따로 저장함.. =
        }       
    );
    // 모델 (테이블) 정의, sequelize 객체의 define 메소드를 이용해서)
};

module.exports = Visitor;