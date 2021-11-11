

### 타입스크립트에서 Class VS Interface
{}모양의 타입지정해줄때 객체로 해줘야겠다고생각한거를 당연히 getter setter 있는 class를 생각했는데 interface를 아래처럼 사용하면 됨 
```ts

// class Item {
//   constructor(
//     public id: number,
//     public title: string,
//     public done: boolean
//   ){}
// }

interface Item {
  id: number;
  title: string;
  done: boolean;
}
```

### 함수의 스펙에 인터페이스를 활용
```ts
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
    return a + b;
};

```

### 딕셔너리 패턴
```ts

interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
};
```

### 인터페이스 확장자
```ts

interface Person {
    name: string;
    age: number;
}

interface Developer extends Person{
    language: string;
}

let kyu2: Developer = {
    language: 'hi',
    age: 100,
    name: 'kyu'
}
```

### Interface VS Type Aliases

Type VS Interface -> 좋은 코드는 확장성이 좋은 것이다. 웬만하면 인터페이스를 써라. 

참고할수있는건 [여기](https://dev.to/toluagboola/type-aliases-vs-interfaces-in-typescript-3ggg)에 따르면 객체는 interface로 만들고 primitive나 union, intersection 타입 등은 type으로 하는 편이라고 한다.

그리고 그런 타입을 다른 타입이나 인터페이스에 넣을수있다는 것도 참고하자


### Union Type And Intersection Type

```ts
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}
```
```ts
function askSomeone(someone: Developer | Person) { // Union type
    someone.name; // 공통된 부분만 접근가능
}

askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 }); // 넣을 때는 Developer 나 Person 타입으로 넣을수있지
```
```ts 
function askSomeone(someone: Developer & Person) { // Intersection type 두 타입다 가지니까 전부 꺼낼수있음
    someone.name;
    someone.skill;
    someone.age;
}
```

### Enum
```ts
enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
    Puma = '퓨마'
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 나이키라고 지정안하면 0 숫자로 나옴 

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer) {
    if (answer === Answer.Yes) {
        console.log('right');
    }
    if (answer === Answer.No) {
        console.log('no');
    }
}
```
