function Customer(Sequelize, Datatypes) {
    return Sequelize.define(
        "customer", 
        {
            custid : {
                type: Datatypes.STRING(10),
                allowNull : false,
                primaryKey: true,
            },
            custname : {
                type: Datatypes.STRING(10),
                allowNull : false,
            },
            addr : {      
                type: Datatypes.STRING(10),
                allowNull : false,
            },
            phone : {
                type: Datatypes.STRING(11),
            },
            birth : { 
                type: Datatypes.DATE,
            },
        }, 
        {
            tableName: "customer",
            freezeTableName: true,
            timestamps: false
        
        }
        );
    }

// function Orders(sequelize, Datatypes) {
//     return Sequelize.define(
//         "orders", 
//         {
//             orderid : {
//                 type: Datatypes.INTEGER,
//                 autoIncerment : true,
//                 allowNull : false,
//                 primaryKey: true,
//             },
//             custid : {
//                 type: Datatypes.STRING(10),
//                 allowNull : false,
//             },
//             prodname : {      
//                 type: Datatypes.STRING(6),
//                 allowNull : false,
//             },
//             price : {
//                 type: Datatypes.INTEGER,
//                 allowNull : false,
//             },
//             amount  : { 
//                 type: Datatypes.INTEGER,
//                 allowNull : false,
//             },
//         }, 
//         {
//             tableName: "orders",
//             freezeTableName: true,
//             Timestamps: false
        
//         }
//         );
//     }


    


// module.exports = Orders;
module.exports = Customer;
