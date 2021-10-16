// arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');
// js에서는 다른타입을 push할수있다
// names.push(3);
// 이것도 된다
// names[0] = 3;
// 타입스크립트에서는 not assignable 이라고 뜬다

// names = 'hello'; // 이렇게 변수의 타입을 변경하는것도 안됨

let numbers = [10, 20, 30, 40];

numbers.push(25);

//also not working
// numbers.push('shaun');
// numbers[1] = 'shaun';

// 근데 애초에 이렇게 숫자랑 스트링이랑 섞여있는건 된다.
let mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;

// 그니까 애초에 타입하나로 선언되어있는 배열은 그해당하는 타입하나로만 가능

// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};

ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30'; // 위에서 배열에서 그런거처럼 오브젝트에서도 이렇게 에러가난다 당연히
// ninja.skills = ['fighting', 'sneaking']; // 프로퍼티를 추가할수도없다 타입스크립트에서는

// ninja = ''; // 변수타입변경불가능
ninja = {
  name: 'yoshi',
  belt: 'orange',
  age: 40
    // skills: [] // 선언불가능
}; // 객체를 다시 선언할때는 처음에 선언한 그 프로퍼티를 가지고 선언ㅇ해야함

