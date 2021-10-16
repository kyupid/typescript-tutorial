let character = 'mario';
let age = 30;
let isBlackBelt = false;

// character = 20; // 다른 타입의 값으로 변경 불가능
// age = 'yoshi';
// isBlackBelt = 'yes';

character = 'luigi';
age= 40;
isBlackBelt = true;

const circle = (diameter: number) => { // 암거나 넣어줘도 에러나니까 타입을넣어준다
  return diameter * Math.PI; // Math도 자바스크립트에 있는거
}

console.log(circle(7.5)); // hello를 넣어도 에러가 안난다
// hello 를 넣은 상태로 컴파일하면 아래와같은에러가남
// sandbox.ts:17:20 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// 근데 js로 컴파일 된 코드에는 당연히 타입이 없음
// 컴파일전에 이렇게 체크해주는거