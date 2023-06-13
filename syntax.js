/* 1-1 기본

JavaScript는 문법의 대부분을 Javadhk C, C++로 부터 차용하고 있음, 또한 대소문자를 구별하며 유니코드 문자셋을 이용함. (다양한 언어를 변수명으로 지정가능)

*/

var 이름 = "노현남";
console.log(이름);

/* 1-2 주석

주석의 구문은 c++ 및 다른 많은 언어와 똑같음.

*/

// <-- 한줄 주석
/* <-- 이건 더 긴
 * <-- 주석을 표현
 */

/* 1-3 변수와 선언

JavaScript의 선언에는 3가지 방법이 있습니다.

*/

var a = 1; // 변수를 선언. 동시에 값을 초기화 할 수 있음.
let b = 2; // 블록 스코프 지역 변수를 선언. 동시에 값을 초기화 할 수 있음.
const c = 3; // 블록 스코프 읽기 전용 상수를 선언. 

// c = 4; // 예시) const의 경우 재할당 불가 
// console.log(c);

/////////////////구조 분해 할당에 대해 추가로 학습이 필요합니다./////////////////


/* 부록 undefined

지정된 초기 값 없이 var 혹은 let문을 사용해서 선언된 변수는 undefined 값을 가짐.
추가로, 선언되지 않은 변수에 접근을 시도하는 경우 ReferenceError 예외가 발생함

*/

var a1;
console.log('a1 값은 ' + a1);

var a2;
console.log('a2 값은 ' + a2);

// undefined를 활용한 변수 값 할당 여부 확인

var input;
if(input === undefined) {
    doThis();
}else {
    doThat();
}

// undefined 는 불리언 맥락(context)에서 사용될 때 false로 동작한다. 예를 들어, 아래 코드는 myArray 요소가 undefined 이므로 myFunction 함수를 실행한다.

var myArray = [];
if (!myArray[0]) myFunction();

// undefined 값은 수치 맥락에서 사용될 때 (정수 형태로) NaN으로 변환됨.

var b1;
console.log(b1 + 2);


//null은, 수치 맥락에서는 0, 불리언 맥락에서는 false로 동작합니다.

var n = null;
console.log(n * 32); // 콘솔에 0이 찍힘


/* 1-4 변수와 스코프

어떤 함수의 바깥에 변수를 선언하면, 현재 문서의 다른 코드에 해당 변수를 사용할 수 있음 -> 전역변수
어떤 함수의 내부에 변수를 선언하면, 오직 그 함수 내에서만 사용할 수 있음 -> 지역 변수

스코프란? -> 변수에 접근할 수 있는 범위

*/
var x = 5; // 전역 스코프에서 변수 x를 선언하고 값을 초기화

if (true) {
    var x = 10; // 블록 내부에서도 x를 선언하고 초기화, but 이때, var로 선언된 변수는 함수 스코프를 가짐
}
console.log(x); // x = 10 <- 때문에 if 문 내부에 선언된 x 역시 함수 스코프를 가지게 됨, 

/* 정리하자면, 전역 스코프에서 var를 이용해 선언 된 변수 x는 실제로 함수 스코프를 가진다 그 이유는 --> JavaScript의 개발 당시 var로 선언된 변수의 유효 범위 결정 기준이 '함수' 단위로 설정되었기 때문.
따라서, 제어문 또는 반복문 내의 var를 이용한 변수 선언도 블록 스코프가 아닌 함수 스코프를 가진다. 따라서 전역 스코프의 x와 블럭 스코프의 x는 동일한 변수로 간주됨 (값이 덮어쓰여짐).

하지만 ES6 이 후 이것이 가능해졌는데, let과 const 선언방법을 사용하면됨 아래는 그 예시
*/


if (true) {
    let y = 4;
}
console.log(y); // Reference error y is not defined





/* 1-5 변수 호이스팅

JavaScript 에서는 예외를 받지 않더라도, 나중에 선언된 변수를 참조할 수 있다. 이러한 개념을 호이스팅 이라고 한다. 아래의 호이스팅 예시를 살펴보자.

*/

// 예시1) 호이스팅의 경우 undefined 값을 반환함 : 이유는 선언된 변수의 식별자가 스코프의 최상단으로 올려지지만, 할당 된 값까지 참조하진 않기 때문이다.
console.log(x === undefined); // true
var x = 3;




