const add = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b);
  console.log(c)
}

console.log(add(5, 10));