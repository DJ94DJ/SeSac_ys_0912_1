


const Visitor = require("../model/Visitor")
exports.home = (req,res) =>{
    res.render("index");
}

exports.visitor = (req,res)=>{
    // const data = Visitor.getVisitors();
    // res.render("visitor", {data : data});
    Visitor.getVisitors((rows)=>{
        res.render("visitor", {data : rows});
        //데이터에 담겼던게 rows에 담김
        //이게 콜백함수 정의

    });
};

// POST요청 /visitor 주소 => 방명록 insert
exports.postVisitor = (req,res)=>{
// insert할 데이터가 어딨는지 찾아야됨
    console.log("req.body : ", req.body);
    Visitor.insertVisitor(req.body, (id)=>{
        console.log("ctrl postVisitor : ", id);
        res.send({
            ...req.body,
            id
        });
    });
}

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req,res) => {
    console.log(req.params);
    Visitor.delVisitor(req.params.id, (result)=>{
        res.send({result: result });
    });
};