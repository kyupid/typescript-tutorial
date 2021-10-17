```typescript
let greet = () => {
  console.log('hello');
}

greet = 'hello';
```
위 코드는 js에서는 되지만 ts에서는 컴파일에러가 난다.

함수를 선언할때는 다음과 같이.
```typescript
let greet = Function; // Unlike boolean, string, etc, the first letter is capital case

greet = () => {
    console.llog("hello");
}
```
함수선언시에 파라미터 타입지정도 배운거처럼 하면된다
```typescript
const add = (a: number, b: number) => {
    console.log(a + b);
}

add(5, 10);
```
파라미터에 옵셔널하게 주려먼 어떻게 해야할까?
```typescript
const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    console.log(c)
}

add(5, 10);
```
물음표를 붙이면 옵셔널하게 변경할수있따.

만약에 옵셔널해서 파라미터를 안넣어줬는데 기본 값을 설정하고 싶다면?
```typescript
const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b);
    console.log(c)
}

add(5, 10);
```
물음표는 없어지고 원하는 값을 지정해주면된다. 물음표를 없애도 옵셔널이다 이경우에는.   

근데 return 하려고하면 number이나 string이기때문에 cannot be applied 라고 IDE에서 빨간줄로 경고.
```typescript
const add = (a: number, b: number, c: number | string = 10) => {
    return a + b + c;
}

console.log(add(5, 10));
```
근데 컴파일은 되고, 실제로 25라는 값이 뜬다.

그리고 옵셔널로 인자를 넣을땐 옵셔널한건 맨뒤에 놔둬야한다.


```typescript
const minus = (a: number, b: number) => {
  return a + b;
}

let result = minus(10, 7);
result = 'something else'; // 이렇게 할수가없다
```
위 코드 같은 경우엔 result에 String을 넣을수없다.   
왜냐면 minus 함수가 실행되면서 자동으로 result가 number라는 타입을 가지기 때문이다.

```typescript
const minus = (a: number, b: number): number => {
  return a + b;
}

let result = minus(10, 7);
```
위 코드는 명시적으로 number을 리턴한다고 해주는 것이다.
하지만 타입스크립트에서는 자동으로 저 함수를 number로 리턴해준다는 것을 추론하기때문이다

```typescript
const add = (a: number, b: number, c: number | string = 10): void => {
    console.log(a + b);
    console.log(c)
}

console.log(add(5, 10));
```
위 코드는 void를 리턴하는 것을 말하는데 중요한점은   
이걸 컴파일했을때 자바스크립트파일에는 리턴값이 undefined가 된다.   
그래서 실제로 위함수를 실행해보면
```typescript
15
10
undefined
```
라고 콘솔에 나온다.

**하지만 타입스크립트에서의 void와 js에서의 undefined는 완전히 독립적이다**
자바스크립트에서는 옵셔널한 파라미터에 파라미터를 넣지않으면 undefined로 지정한다.   
