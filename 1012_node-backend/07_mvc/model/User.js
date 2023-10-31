const mysql = require("mysql");
const cnn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "Aa231024?!aA",
  database: "sesac_test",
});

exports.post_signup = (data, cb) => {
    //insert
    const sql = `insert into user (userid, name, pw) values ('${data.userid}', '${data.name}', '${data.pw}')`
   
    cnn.query(sql, (err, result)=>{
        if(err) {
            throw err;
        }
        cb();
    });
};

exports.post_signin = (data, cb) => {
    

    // data ={userid, pw)

    let sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' limit 1`;
        cnn.query(sql, (err, rows) => {
            if (err) {
                throw err;
             }
             cb(rows);
            });

    // select
};

exports.get_user = (id, cb) => {
    let sql = `SELECT * FROM user WHERE id='${id}' limit 1;`
    cnn.query(sql, function (err, rows) {
      if (err) throw err
      cb(rows)
    })
  };

exports.update_profile = (data, cb) => {
    let sql = `UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`
    cnn.query(sql, (err) => {
      if (err) throw err
      cb()
    })
  };

exports.delete_user = (id, cb) => {
    cnn.query(`DELETE FROM user WHERE id='${id}'`, (err) => {
      if (err) throw err
      cb()
    })
  };