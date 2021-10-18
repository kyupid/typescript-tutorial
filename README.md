
유니언 타입이나 타입이 객체이면 파라미터에 뭘 넣었는지 복잡해 보인다.

이럴때 타입을 따로 빼서 정의해서 사용할 수 있다.

```typescript
type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum};

const logDetatils = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

const greetAgain = (user: objWithNAme) => {
    console.log(`${user.name} says hello`);
}
```

