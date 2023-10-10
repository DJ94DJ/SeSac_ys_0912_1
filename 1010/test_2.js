function run() { 


    makeTag();
    

    console.log("3초뒤 실행");

}

    console.log("시작");

   

    //콜백함수 : 함수의 인자로 함수를 넘길 때, 인자로 넘기는 그 함수
    setTimeout(run, 3000);
    //괄호 쓰면 안된다. 노드에선.. / 뒤에는 시간 인자 (3초뒤) 란 뜻 > 3초뒤에 run이란 함수를 실행시킨다는 뜻
    console.log("끌");
