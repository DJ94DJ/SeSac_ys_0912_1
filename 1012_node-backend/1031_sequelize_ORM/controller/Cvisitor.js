//시퀄라이저로 정리하는것

const { Visitor }= require("../model") // 모델 /index.js 부르겠단뜻


exports.home = (req, res) => {
  res.render("index");
};

// GET /visitors => 기존 방명록 전체 조회후 렌더 (render("visitor"))
exports.visitor = (req, res) => {
    
    //select * from visitor; >>> 전체조회
    Visitor.findAll()
    .then((result)=>{
        console.log("findAll result: ", result);
        console.log("0 index의 username: ", result[0].username); //dataValues는 생략해도됨??

        // 기대한 것 : [{id: , username: , comment: }, {id: , username: , comment: }]
        
        res.render("visitor", {data : result}); //ejs 파일 이름 확인
    });

    // Visitor.findAll({
    //     where: { username : "lily"} 객체형태로 작성
    // )};
 
};

// POST /visitor => 방명록 insert
exports.postVisitor = async (req, res) => {
    const data = {
        username: req.body.username,
        comment: req.body.comment
    };
    //Visitor.create(data).then((result)=>{
    //     console.log("create result:", result);
    //     res.send(result);
    // })
    //.catch((err)=>{
    //     console.log(err);
    //     res.status(400).send("오류발생");
    // });

    const createVisitor = await Visitor.create(data)
    .catch((err)=> {console.log(err); res.status(400).send("오류발생");});
    res.send(createVisitor);

};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
    Visitor.destroy({
        where: {
            id: req.params.id,
        },
    }).then((result) => {
        console.log("destroy result", result);
       res.send({result: result}); 
       
    });
};


// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
    // select * from visitor where id = ? limit 1
    Visitor.findOne({
        where: { 
            id :req.params.id
        },
    }).then((result) => {
        console.log("findOne result", result);
        res.send(result);
    });
  
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
    const data = {
        username: req.body.username,
        comment: req.body.comment,
    };
    // update visitor set user name = '?', comment = '??' where id = ?;
    
    Visitor.update(data,{
        where: {
            id: req.body.id,
        },
    }).then((result)=>{
        console.log("update result:", result)
        res.send({ result: true });
    })

    //data 자체가 객체이므로 {} 쌀필요가 없었다. 만약 여기에 문제가 있다면 sql에 정보가 안가서 수정 반영이 안된다.
  
};

exports.getTest = (req, res) => {

    //select * from visitor where id = 9 limit 1 order by username ASC

    Visitor.findAll({
        attributes: ["username", "id"], //내용선정, 
        //{"username":"해결군","id":10}. 
        // where: { 
        //     id :req.params.id
        // },
        order: [["id", "ASC"]],
    }).then((result) => {
        console.log("findOne result", result);
        res.send(result);
    });
  
}