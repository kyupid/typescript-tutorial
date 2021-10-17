`any` 타입

any 타입은 변수에 아무거나 넣어도 된다   
초기화된 변수의 타입도 변경이 가능하다

```typescript
let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age);
age = {name: 'luigi'}
console.log(age);
```

배열에도 쓸 수 있다.
```typescript
let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);
```

오브젝트에도 쓸 수 있다. 
```typescript
let ninja: { name: any, age: any};

ninja = {name: 'yoshi', age: 25};
console.log(ninja);
```