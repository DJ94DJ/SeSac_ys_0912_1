const { Customer, Orders, Sequelize} = require("../model");
const Op = Sequelize.Op;



exports.main = async (req, res) => {
    // user의 주문 목록 "이름"과 함께
    const cust = await Customer.findAll({
        attributes : ["custid", "custname", "birth"],
        // where : { custname: "강해린" },
        // where : {birth:"2000-01-01"},
        // where : { birth: { [Op.gte]: "2000-01-01"}},//2000년대 이후 출생인원 확인
        // where : { birth: { [Op.lte]: "2000-01-01"}},//2000년대 이전 출생인원 확인
        // where : { custid: { [Op.like]: "%a%"}}, //아이디에 a가 들어가는 인원
        // where : { custid: { [Op.like]: "%a"}}, //아이디에 a로 끝나는 인원
     


        include: [
            {
                model: Orders,
                attributes : { exclude: ["custid"] },
                // where: {}
            },
        ],
        raw: true // 불필요한 중괄호를 없엔다.
    });
    
    res.send(cust);
};
