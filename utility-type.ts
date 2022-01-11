// keyof

interface utilUser {
  id: number;
  name: string;
  age?: number;
  gender?: "m" | "f";
}

type UserKey = keyof utilUser; // "id" | "name" | "age" | "gender"

const uk: UserKey = "id";

// Partial<T>
let partAdmin: Partial<utilUser> = {
  id: 1,
  name: "bob",
};

// Required<T> - 옵션도 필수로 만들어버림
let reAdmin: Required<utilUser> = {
  id: 1,
  name: "Bob",
  age: 3,
  gender: "f",
};

// Readonly<T>
let readAdmin: Readonly<utilUser> = {
  id: 1,
  name: "BOb",
};

// Record<K, T>
interface reScore {
  "1": "A" | "B" | "C" | "D";
  "2": "A" | "B" | "C" | "D";
  "3": "A" | "B" | "C" | "D";
  "4": "A" | "B" | "C" | "D";
}

type Grade = "1" | "2" | "3" | "4";
type SCore = "A" | "B" | "C" | "D";

const score: Record<Grade, SCore> = {
  1: "A",
  2: "B",
  3: "D",
  4: "C",
};

function isValid(user: utilUser) {
  const result: Record<UserKey, boolean> = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
    gender: true,
  };

  return result;
}

// Pick <T, K> -- 선택한 것만
const pickAdmin: Pick<utilUser, "id" | "name"> = {
  id: 0,
  name: "Bob",
};

//Omit <T, K> -- 제외
const omitAdmin: Omit<utilUser, "age" | "gender"> = {
  id: 0,
  name: "Bob",
};

// Exclude <T1, T2> -- t1에서 t2를 제거
type T1 = string | number | boolean;
type T2 = Exclude<T1, number>;

// NonNullable<Type>
type nullT1 = string | null | undefined | void;
type nullT2 = NonNullable<nullT1>;
