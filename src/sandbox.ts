type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum};

const logDetatils = (uid: StringOrNum, item: objWithName) => {
  console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
}

const item = {name: 'kyu', uid: 'ggggerjoig'};

console.log(logDetatils('fewfew', item));