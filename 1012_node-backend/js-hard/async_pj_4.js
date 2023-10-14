//-------------------- 배경색 변경 지옥 수정하기 원본코드
// function changecol() {
//     setTimeout(function () {
//         document.body.style.backgroundColor = 'red';
//         setTimeout(function () {
           
//             document.body.style.backgroundColor = 'orange';
//             setTimeout(function () {
               
//                 document.body.style.backgroundColor = 'yellow';
//                 setTimeout(function () { 
                   
//                     document.body.style.backgroundColor = 'green';
//                     setTimeout(function () {
                       
//                         document.body.style.backgroundColor= 'blue';
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }


//------------------- 수정한 코드

function changeBackgroundColor(color, delay, callback) {
  setTimeout(() => {
    console.log(`현재 배경색: ${color}`);
    callback();
  }, delay);
}

function changecol() {
    changeBackgroundColor('red', 1000, function() {
      changeBackgroundColor('orange', 1000, function() {
        changeBackgroundColor('yellow', 1000, function() {
          changeBackgroundColor('green', 1000, function() {
            changeBackgroundColor('blue', 1000, function() {
              // 모든 작업이 완료되었을 때 마지막 콜백 함수에서 추가적인 로직을 수행할 수 있습니다.
            });
          });
        });
      });
    });
  }

changecol();

//------------------------


function changeBackgroundColor(color, delay, callback) {
    setTimeout(() => {
      console.log(`현재 배경색: ${color}`);
      callback();
    }, delay);
  }

async function changecol(colorname) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            document.body.style.backgroundColor = colorname;
            resolve();
        }, 1000);
    });
}

async function execCol() {
    await changecol('red');
    await changecol('orange');
    await changecol('yellow');
    await changecol('green');
    await changecol('blue');
}

execCol();

