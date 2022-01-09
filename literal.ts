// Literal Types

const userName1 = "Bob"; // 문자열 리터럴 타입
let userName2: string | number = "Tom";

userName2 = 3;

type Job = "police" | "developer" | "teacher";

interface Us {
  name: string;
  job: Job;
}

const jobUser: Us = {
  name: "Bob",
  job: "developer",
};

interface HighSchoolStudent {
  name: string;
  grade: 1 | 2 | 3;
}

// Union Types

interface UnionCar {
  name: "car";
  color: string;
  start(): void;
}

interface UnionMobile {
  name: "mobile";
  color: string;
  call(): void;
}

function getGift(gift: UnionCar | UnionMobile) {
  console.log(gift.color);
  if (gift.name === "car") {
    gift.start();
  } else {
    gift.call();
  }
}

// Intersection Types

interface InterCar {
  name: string;
  start(): void;
}

interface InterToy {
  name: string;
  color: string;
  price: number;
}

const interToyCar: InterCar & InterToy = {
  name: "타요",
  start() {},
  color: "blue",
  price: 1000,
};
