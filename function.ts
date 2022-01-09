// 함수

function addNum(num1: number, num2: number): void {
  console.log(num1 + num2);
}

function isAdultFunction(age: number): boolean {
  return age > 19;
}

function hello(name = "world") {
  return `hello ${name}`;
}

const result = hello();
const result2 = hello("sam");

function helloNameAge(name: string, age?: number) {
  // 선택적 매개변수가 앞으로 오면 안됌
  if (age !== undefined) {
    return `Hello, ${name}. you are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(helloNameAge("sam"));
console.log(helloNameAge("sam", 30));

// ...으로 인자를 여러개 받을 때
function addN(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

addN(1, 2, 3); // 6
addN(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

// this.와 관련된

interface UserThis {
  name: string;
}

const Sam: UserThis = { name: "Sam" };

function showName(this: UserThis, age: number, gender: "m" | "f") {
  console.log(this.name, age, gender);
}

// bind는 잘 모르겠음
const asam = showName.bind(Sam);
asam(30, "m");

function join(name: string, age: string): string;
function join(name: string, age: number): User;
function join(name: string, age: number | string): User | string {
  if (typeof age === "number") {
    return {
      name,
      age,
      birthYear: 1996,
    };
  } else {
    return "나이는 숫자로 입력해주세요.";
  }
}

const sam: User = join("Sam", 30);
const jain: string = join("Jane", "30");
