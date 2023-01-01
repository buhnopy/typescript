let b: boolean = false;
let c: number[] = [1, 2, 3];
c.push(1);
const player1 = {
  name: "jiyun",
  age: 1,
};
const player2: {
  name: string;
  age?: number;
} = {
  name: "jiyun",
};
//Alias 타입
type Name = string;
type Age = number;
type Player = {
  name: Name;
  age?: Age;
};
const player3: Player = {
  name: "jiyun",
};
function playerMaker1(name: string): Player {
  return {
    name,
  };
}

const playerMaker = (name: string): Player => ({ name });
const playMaker2 = () => ({});
const jiyun = playerMaker("jiyun");
jiyun.age = 12;

const add = (a: number, b: number) => a + b;
function add1(a: number, b: number) {
  return a + b;
}
console.log(add(1, 2));
//call signiture
type Add = (a: number, b: number) => number;
const add2: Add = (a, b) => a + b;

type Config = {
  path: string;
  state: object;
};
type Push = {
  (path: string): void;
  (config: Config): void;
};
const push: Push = (config) => {
  if (typeof config === "string") {
    console.log("console");
  } else {
    console.log(config.path);
  }
};
//Generic type
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};
type SuperPrint2 = {
  <T,M>(a: T[], b:M): T;
};
const superPrint: SuperPrint2 = (arr) => {
  return arr[0];
};
const a = superPrint(["a", "b", "c"], 1);
const v = superPrint([1, 2, 3, 4], [1,2,3]);
const g = superPrint([1, 2, 3, 4,"2"], "1");