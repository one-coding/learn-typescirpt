function add(num1:number, num2:number) {
    console.log(num1 + num2);    
}

// add()
// add(1)
add(1, 2)
// add(3, 4, 5)
// add("hello", "world")

function showItems(arr:number[]) {
    arr.forEach(item => {
        console.log(item);
    });
}

showItems([1,2,3])
// showItems(1,2,3) // error


// number
let age:number = 30

// boolean
let isAdult:boolean = true

// array number
let a:number[] = [1,2,3]
let a2:Array<number> = [1,2,3]

// array string
let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed']

// 문자열 배열에 숫자를 넣으려고 하면 에러 표시
// week1.push(3)

// 튜플 (Tuple);

let b:[string, number];
b = ['z', 1]
// b = [1, 'z'] // error

// b[0].toLowerCase();
// b[1].toLowerCase(); //error 숫자형에는 없는 메서드


// void, never
function sayHello():void { // return이 없는 함수
    console.log('hello');
    
}

function showError():never { // 에러를 반환하거나
    throw new Error()
}

function infLoop():never { // 끝나지 않는 함수는 never
    while (true) {
        
    }
}

// enum
enum Os {
    Window = 'win', 
    Ios = 'ids',
    Android = 'and'
}

let myOs:Os;

myOs = Os.Window


// null, undefined 
let aNull:null = null;
let bNull:undefined = undefined