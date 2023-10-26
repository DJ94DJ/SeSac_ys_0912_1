//모델

exports.commentInfos = () => {

//mysql 연결 
//select * from comment;
// 결과값을 함수에서 리턴
// 이걸 Cmain 컨트롤러에 불러올 예정
    return [
        {
            id: 1,
            userid: "DJ", 
            date:"2023-10-26", 
            comment: "hi" 
        },
        {
            id: 2, 
            userid: "lily", 
            date:"2023-10-27",
            comment: "hello world!" 
        },
    ];
};

