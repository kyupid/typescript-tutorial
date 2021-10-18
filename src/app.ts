// const anchor = document.querySelector('a')!;
//
// // if(anchor) {
// //     console.log(anchor.href); // 인덱스페이지에 있는지 어디에있는지 모른다.
// // }
//
// console.log(anchor.href); // quertSelector 맨 뒤에 느낌표를 주면 에러를 지울 수 있다.

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement; // as를 쓰면 절대 null이 아니고 ㄷ특정한 엘리먼트이다
// console.log(form.children);
const kyuForm = document.querySelector('.test_form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // 폼 제출하면 리프레쉬 되니까 안되게
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})

const test = document.querySelector('#test') as HTMLInputElement;
kyuForm.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    console.log(
        test.value
    );
})