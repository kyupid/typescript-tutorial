

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
