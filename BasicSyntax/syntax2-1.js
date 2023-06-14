/* 2-1 데이터 구조 및 형

최신 ES6 표준은 8가지 데이터 타입을 정의한다.

원시 타입
1. Boolean = true와 false
2. null = null 값을 나타내는 키워드 (대소문자 유의)
3. undefined = 값이 정의되어 있지 않은 최상위 속성
4. Number = 정수 또는 실수형 숫자
5. BigInt = Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체입니다.
6. String = 문자열
7. Symbol = 인스턴스가 고유하고, 변하지 않는 형

참조 타입
8. object = object는 다양한 값을 포함할 수 있는 복합적인 데이터 구조로, 속성(key)과 값(value)의 쌍으로 구성된다는 특징을 가짐

*/

// Boolean 예시

var isTrue = true;
var isFalse = false;

if (isTrue) {
    console.log("이 코드는 실행 됨")
}
if (isFalse) {
    console.log("이 코드는 실행 되지 않음")
}

// null

var isNull = null;
console.log(isNull); // null

// undefined

var x; // 값을 할당하지 않고 변수 선언
console.log(x); // undefined

//Number

var integer = 42; // 정수
var realNumber = 3.14; // 실수

//Bigint

const bigInt = 10n; // 정수 리터럴 뒤에 n을 붙이는 방식
const bigInt2 = BigInt(0); // BigInt() 함수를 호출하는 방식

//Stiring

var myName = "홍길동";
console.log(typeof myName); //string

//symbol

