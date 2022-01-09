// 접근 제한자 (Access modifier) - public, private, protected
/* 
public - 자식 클래스 , 클래스 인스턴스 모두 접근 가능
protected - 자식 클래스에서만 접근 가능
private - 해당 클래스 내부에서만 접근 가능 
*/

class CarClass {
  readonly name: string = "car";
  color: string;
  static wheels = 4;
  constructor(color: string, name) {
    this.color = color;
    this.name = name;
  }
  start() {
    console.log("start");
    console.log(this.name);
    console.log(CarClass.wheels);
  }
}

class Bmww extends CarClass {
  constructor(color: string, name) {
    super(color, name);
  }
  showName() {
    console.log(this.name);
  }
}

const z4 = new Bmww("black", "Zzz4");
console.log(z4.name);
console.log(CarClass.wheels);

// z4.name = "zzz4";

// 추상 class
abstract class Carr {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  start() {
    console.log("start");
  }

  abstract doSomething(): void; // 추상화 - 선언만 해주고 구체적인 기능은 상속받은 쪽에서 하는 거
}

// const car = new Car("red") 이런식으로 못 만들고 상속만 가능

class Bmwww extends Carr {
  // 추상 클래스 안의 추상 메서드를 상속 받은 경우 여기서 확실히 무슨 일 하는 지
  // 여기서 코딩해야함
  constructor(color: string) {
    super(color);
  }
  doSomething(): void {
    alert(3);
  }
}
