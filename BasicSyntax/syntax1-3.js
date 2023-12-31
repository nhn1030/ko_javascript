/* 1-3 변수와 선언

JavaScript의 선언에는 var, let, const 3가지 방법이 있습니다.

*/


/* var로 선언하기

var는 javascript의 과거부터 사용된 변수 선언 키워드로, var로 선언된 변수는 함수 스코프를 가지며, 호이스팅이 발생한다. 또 이러한 특성으로 인해 중복 선언이 가능하다.

- 함수 스코프를 가지는 이유는? : javascript 가 개발될 당시 var로 선언된 변수의 유효 범위 결정 기준이 '함수' 단위로 설정되었기 때문.

- 호이스팅이란? : 선언 단계와 초기화 단계가 분리되고, 선언단계의 변수가 스코프의 최상단으로 끌어올려지는 것을 의미함. 
    선언 단계 : 변수의 식별자(이름)이 스코프에 등록됨, 이 단계에서 메모리에 변수를 위한 공간을 할당한다.
    초기화 단계 : 변수에 실제로 값을 할당함, 이 단계에서 메모리에 실제 값을 가지게 됨

- 중복 선언이 가능하다는 의미는 무엇인가요? : 위와 같은 이유들로 var는 중복선언이 가능한데, 호이스팅으로 인해 스코프의 최상단으로 변수가 끌어 올려졌기 때문에
                                    실제로 변수가 선언되기 이전에 변수를 참조할 수 있다. 단, 실제로 변수에 할당된 값은 옮겨지지 않고, undefined로 초기화 됨


이제 아래 var선언의 예시를 살펴보자.

*/

// var 예제 1 - var를 이용한 변수 선언과 값 할당

var x = 2;
console.log(x); // = 2

// var 예제 2 - 함수 스코프 선언

if (true) {
    var x = 5;
}

var x = 10;

console.log(x); // = 10 
// 설명 : x는 var를 이용하여 선언되었기때문에 함수 스코프를 가짐, var 선언의 특성 상, if 문 외부에서도 변수에 접근이 가능하여 변수 x 중복으로 선언 후 초기 값으로 10을 할당함

// var 예제 3 - 호이스팅

console.log(x); // = undefined

var x = 5;

console.log(x); // = 5


/* let으로 선언하기

let은 const와 함께 ECMA2015(ES6)에서 도입된 변수 선언 키워드이다. 이는 var와는 다르게 블록 스코프를 가지는 것으로 이해하면 된다.

그렇다면, 함수 스코프를 가지는 것과 블록 스코프를 가지는 것의 차이는 무엇인지 간단하게 짚고 넘어가자.

*/


// 함수 스코프 예시

function functionScope() {
    var y = 5;
    if (true) {
        var y = 20;
        console.log(y);
    }
    console.log(y);
}


// 블록 스코프 예시

function blockScope() {
    if (true) {
        let x = 5;
        console.log(x); // = 5
    }
    console.log(x); // = ReferenceError 오류 : x는 블록 외부에서 참조할 수 없음.
}

// let 예제 1 - let을 이용한 변수 선언과 할당

let x = 5;
console.log(x);

// let 예제 2 - 블록 스코프 선언

function blockScope() {
    if (true) { 
        let x = 5;
        console.log(x);
    }
    console.log(x); // = ReferenceError 오류 : let으로 선언된 x는 블록 외부에서 참조할 수 없음.
}

// let 예제 3 - 호이스팅

console.log(x); // ReferenceError: x is no defined
let x = 10;
console.log(x); // = 5


/* const로 선언하기

const 역시 ECMA2015(ES6)에서 도입된 블록 스코프 변수 선언 키워드이다. const로 선언된 변수는 상수(constant)로 간주되어 재할당이 불가능하다.
또, const는 선언과 동시에 값을 해야한다. 선언 이후에 재할당이 불가능하기 때문에 반드시 초기화가 필요하다.

*/

// const 예제 1 - 상수 선언, 재할당

const PI = 3.14;
PI = 3.14159 // TypeError: Assignment to constant variable

