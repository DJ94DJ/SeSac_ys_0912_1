// console.log("실습 : callback -> promise");

// function call(name, cb) {
//     setTimeout(function () {
//         console.log(name);
//         cb(name);
//     }, 1000);
// }

// function back(cb) {
//     setTimeout(function () {
//         console.log('back');
//         cb('back');
//     }, 1000);
// }

// function hell(cb) {
//     setTimeout(function () {
//         console.log('back');
//         cb('callback hell');
//     }, 1000);
// }

// //-

// call('kim', function (name) {
//     console.log(name + '반가워');
//     back(function (txt) {
//         console.log(txt + '을 실행했구나');
//         hell(function (message) {
//             console.log('여기는' + 'message');
//         });
//     });
// });



//----------------------------------------수정---------------




async function call(name) {
    return new Promise((resolve, reject)=> {
        setTimeout(function () {
            console.log(name);
            // let result = name; //name을 받아서 해야한다.
            resolve(name);
        }, 1000);
    });
};

async  function back() {
    return new Promise((resolve, reject)=> {
        setTimeout(function () {
            console.log('back');
            // let result = 'back';
            resolve('back');
        }, 1000);
    });
};


async function hell() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            // let result = 'callback hell';
            resolve('callback hell');
        }, 1000);
    });
}


async function exec() {

    const user = await call('kim');
    console.log(user, '반가워');

    const program = await back(user); 
    console.log( program, '을 실행했구나');

    const show = await hell()
    console.log('여기는', show);

}

exec();












//----------------------------------------then 써서 수정---------------

// console.log("실습 수정 : callback -> promise then 써서");


// function call(name) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(function () {
//             console.log(name);
//             // let result = name; //name을 받아서 해야한다.
//             resolve(name);
//         }, 1000);
//     });
// };

// function back() {
//     return new Promise((resolve, reject)=> {
//         setTimeout(function () {
//             console.log('back');
//             // let result = 'back';
//             resolve('back');
//         }, 1000);
//     });
// };


// function hell() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             // let result = 'callback hell';
//             resolve('callback hell');
//         }, 1000);
//     });
// }


// call('kim') 
//     .then(function(name) {
//         console.log(name, '반가워 뿅');
//         return back(); //다음 함수로 이동
//     })

//     .then(function(back) {
//         console.log(back, '을 실행했구나 뿅');
//         return hell(); 
//     })

//     .then(function(hell) {
//         console.log('여기는', hell);
//     })


// async function exec() {

    


//     const user = await call('kim');
//     console.log(user, '반가워');

//     const program = await back(user); 
//     console.log( program, '을 실행했구나');

//     const show = await hell()
//     console.log('여기는', show);

// }

// exec();



