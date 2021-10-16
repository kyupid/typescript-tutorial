// explict types
let character: string; // 변수 초기화
let age: number;
let isLoggedIn: boolean;

// age = 'ligi'; // 에러가난다.
age = 30; // 타입같으니까 ㄱㅊ

// isLogged = 25; // 에러가난다.
isLoggedIn = true;

//  arrays
// let ninjas: string[]; // In future It's gonna be always a string array

// ninjas = [10, 20]; // this gonna be not allowed

// ninjas.push('shaun'); // 여기서 에러가 안나는데 컴파일하고 실행시키면?
// 브라우저에서 sandbox.js:12 Uncaught TypeError: Cannot read properties of undefined (reading 'push')
//     at sandbox.js:12
// 위와 같은 에러가난다.

// 왜냐면 init한게 아니라 string[] 이라는 타입만 지정해줬기 때문이다.
// let ninjas: string[] = []; 이렇게 배열을 초기화해줘야한다.
// primitive 변수랑 비교해서 인지해둬야한다 그래서.

let ninjas: string[] = [];
ninjas.push('ky'); // 에러 없음

// 만약에 mixed type으로 배열을 선언하고 싶다면 ?
// that is union types !

// union types
let mixed: (string|number)[] = []; // 이렇게 선언함ㄴ 된다.
mixed.push('hello');
mixed.push(20);
// mixed.push(false); // 에러가난다.
console.log(mixed);

// 또 유니언 타입은 배열뿐만아니라 그냥 타입으로 지정할수도있다
let uid: string|number;
uid = 123;
uid = '123';

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30};
// ninjaOne = 'hello'; // This wouldn't work
ninjaOne = []; // 이건 동작한다 because an array is actually a kind of object

// 그래서 아래 ninjaTwo 처럼 정한다
let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}

ninjaTwo = {
    name: 'mario', age: 20, beltColor: 'black'
} // 처음선언했을때 가지는 속성을 그대로 가지고 변수에 객체를 할당해야한다
