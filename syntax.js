/*1-1 기본
JavaScript는 문법의 대부분을 Javadhk C, C++로 부터 차용하고 있음, 또한 대소문자를 구별하며 유니코드 문자셋을 이용함. (다양한 언어를 변수명으로 지정가능)
*/

var 이름 = "노현남";
console.log(이름);

/*1-2 주석
주석의 구문은 c++ 및 다른 많은 언어와 똑같음.
*/

// <-- 한줄 주석
/* <-- 이건 더 긴
 * <-- 주석을 표현
 */

/*1-3 변수와 선언
JavaScript의 선언에는 3가지 방법이 있습니다.
*/

var a = 1; // 변수를 선언. 동시에 값을 초기화 할 수 있음.
let b = 2; // 블록 스코프 지역 변수를 선언. 동시에 값을 초기화 할 수 있음.
const c = 3; // 블록 스코프 읽기 전용 상수를 선언. 

// c = 4; // 예시) const의 경우 재할당 불가 
// console.log(c);

///////////////// 구조 분해 할당에 대해 추가로 학습이 필요합니다./////////////////


/* 
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
