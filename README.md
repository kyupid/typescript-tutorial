### // example 1
변수에 함수 시그니쳐를 넣을 수 있다.

`greet`은 이전에 선언된 greet의 파라미터 갯수와 타입을 똑같이 가진다

### // example 2
만약에 `} else {` 가 없으면 경고가 뜬다.

그 경고는 return 값이 `number | undefined`가 될 수 없다는 거다.

`if (action === 'add')`가 아닌 경우에는 void 이기 때문이다.

### // example 3
타입 시그니쳐를 변수에 할당할 때 객체를 넣었다.

이때 타입을 미리 받아서 예제3 같이 만들 수 있다.