### Interfaces with Classes

인터페이스를 변수의 타입으로 지정 가능하다.

```typescript
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('kyu', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 300);
``` 

이 때 Invoice와 Payment는 HasFormatter를 implement하고 있다.


```typescript
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
```

docs 배열에는 이제 HasFormatter를 implement하면 어떤 객체든지 들어올 수 있다.
그럼으로써 docs에는 HasFormatter가 구현하고있는 format(): string; 메서드를 
모두 가지고 있구나라는 것을 게런티받으면서 사용할수있다.



