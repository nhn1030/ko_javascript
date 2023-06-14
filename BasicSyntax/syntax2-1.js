/* 2-1 데이터 구조 및 형

최신 ES6 표준은 8가지 데이터 형을 정의한다.

1. Boolean = true와 false
2. null = null 값을 나타내는 키워드 (대소문자 유의)
3. undefined = 값이 정의되어 있지 않은 최상위 속성
4. Number = 정수 또는 실수형 숫자
5. Bigint = 임의 정밀도의 정수
6. String = 문자열
7. Symbol = 인스턴스가 고유하고, 변하지 않는 형
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
