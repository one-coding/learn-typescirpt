// let user:object;

// user = {
//     name: 'xx',
//     age: 30
// }

// user라는 object에는 name라는 속성이 없다
// console.log(user.name);

// ------- interface 도입 --------
type Score = 'A' | 'B' | 'C' | 'F'

interface User  {
    name : string
    age : number
    gender? : string // 옵셔널한 프로퍼티에는 ?를 붙여야 하고 있다면 무조건 string 
    readonly birthYear : number // 읽기 전용 속성
    [grade:number] : Score;
}

let user: User = {
    name : 'xx',
    age : 30,
    birthYear : 2000,
    1: 'A',
    2: 'B'
}

user.age = 10;
user.gender = 'male';


console.log(user.age);


// interface function
interface Add { 
    (num1: number, num2: number) : number 
}

const addFunction : Add = function (x, y) {
    return x + y;

}

interface IsAdult {
    (age:number) : boolean
}

const ad:IsAdult = (age) => {
    return age > 19
}

ad(33) // true


// interface class => implements
interface Car {
    color : string;
    wheels : number;
    start() : void
}

class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c: string) {
        this.color = c
    }
    start() {
        console.log('go.!');
        
    }
}

const bmw = new Bmw('green')

// extends

interface Benz extends Car {
    door: number;
    stop(): void;
}

const benz : Benz = {
    color : 'red',
    wheels : 5,
    door : 5,
    start(){
        console.log("go!");
        
    },
    stop(){
        console.log('stop');
    }
}

interface Toy { 
    name : string 
}

interface ToyCar extends Car, Toy {
    price : number
}
