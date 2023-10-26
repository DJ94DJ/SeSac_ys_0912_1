//controller 컨트롤러

const { commentInfos }= require("../model/Comment");

exports.main = (req, res) => {
    res.render("index");
};

// 함수 형태 그대로 해서 main으로 한뒤에 익스포츠
// function(req, res){
//     res.render("ejs");
// }

exports.comments = (req, res) => {
    const commentData = commentInfos();
//해당 함수는 담과 같이 작성

// commentData =[{
//     id: 1,
//     userid: "DJ", 
//     date:"2023-10-26", 
//     comment: "hi" 
// },
// {
//     id: 2, 
//     userid: "lily", 
//     date:"2023-10-27",
//     comment: "hello world!" 
// },]

    res.render("comments", {
        commentInfos: commentData
    });
};


