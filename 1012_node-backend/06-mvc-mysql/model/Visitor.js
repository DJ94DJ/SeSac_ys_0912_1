// mysql 연결 코드
const mysql = require("mysql");

// createConnection: mysql 연결 정보를 받아서 mysql과 연결.
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'user',
    // user : "root", 이걸로 하면 전체권한이라 에러가 뜬다? *근데 오류 안뜸.
    password : 'Aa231024?!aA',
    database : 'sesac_test'
});
/* db 연결한다 > 
host : localhost
user : 여기선 root라는 이용자로 되었다, 
database : 이름 - sesac_test, 
*/


exports.getVisitors = (cb) => {
    // 1번째 콜백
    // (cb)= 콜백함수를 받겠단 뜻
    // 콜백함수를 받아서 넘겨주는 방식으로 해야함 (프로미스기반이아니라)
    // sql 넘기고 콜백 넘거야 함
    //통신하고 에러err 변수가 빈값이 아닐시 에러 발생 알림

    conn.query(`SELECT * FROM visitor`, (err, rows)=>{
        // 2번째 콜백
        //데이터를 row에 받는다
        if(err) {
            throw err; // 발생시 함수 종료
        }

        //성공했을 시 두번째 매개변수 (rows에 담김)
        console.log("rows :", rows);
        //데이터 확인
        
        cb(rows); // 콜백함수 사용한 부분
        //콜백 함수를 매개변수로 결과를 넘겨준다.
    });
    // return [
    //     {id:1, username :"홍길동", comment:"내가 왔다"},
    //     {id:2, username :"이찬혁", comment:"으라차차"},
    // ];
};

// 콜백함수 받기전에 데이터 받기
// insert into visitor (username, comment) values (??, ??)
exports.insertVisitor = (data , cb) => {
    const sql = `insert into visitor (username, comment) values ('${data.username}', '${data.comment}')`;
    conn.query(sql, (err,result) => {
        if(err) {
            throw err; // 발생시 함수 종료
        }

        console.log("visitor insert :", result);
        cb(result.inertId);
    });
};

exports.insertVisitor = (data, cb) => {
    // insert into visitor (username, comment) values ('????', '?????')
    const sql = `insert into visitor (username, comment) values ('${data.username}', '${data.comment}')`;
    conn.query(sql, (err, result) => {
      // err 변수가 빈 값이 아니라면, err가 발생했다는 것.
      if (err) {
        throw err;
      }
      console.log("visitor insert", result);
      cb(result.insertId);
    });
  };


  exports.delVisitor = (id, cb) => {
    //딜리트할 아이디를 받아야한다.
    const sql = `delete from visitor where id = ${id}`;
    conn.query(sql, (err, result) => {
        if (err) {
            throw err;
        }

        let flag = false;

        if (result.affectedRows) {
            flag = true;
        }

        console.log("visitor delet", result);
        cb(flag);
    })
  }

//   sql구문에 오류시 (76라인)
//   code: 'ER_PARSE_ERROR',
//   errno: 1064,
//   sqlMessage: "You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '= id = 9' at line 1",
//   sqlState: '42000',
//   index: 0,
//   sql: 'delete from visitor where = id = 9'