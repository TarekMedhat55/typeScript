//types
let theName: string = "tarek";
let theAge: number = 20;
let login: boolean = true;
let all: any = "sasa";
let all2: string | number = 22;
//array
let myFriend: string[] = ["ahmed", "sasa", "saad"];
let myFriendAge: number[] = [10, 30, 20];
let myFriendAge2: (string | number | string[])[] = [
  10,
  30,
  20,
  "sasa",
  "ahmed",
  ["soso", "asmaa"],
];
//function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(10, 10));

function add2(string1: string, string2: string): string {
  return string1 + string2;
}

console.log(add2("soso", "asmaa"));

//optional and default parameters
function showData(
  name: string = "tarek",
  age: number,
  country?: string
): string {
  return `${name} ${age} ${country}`;
}
showData("sasa", 22, "saudia");

function addAll(...nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result = nums[i];
  }
  return result;
}

console.log(addAll(10, 20, 30));

//anonymous function
//arrow function

const addFun = function (num1: number, num2: number, num3: number): number {
  return num1 + num2 + num3;
};
console.log(addFun(2, 1, 3));

const addArrow = (num1: number, num2: number, num3: number): number => {
  return num1 + num2 + num3;
};
console.log(addArrow(2, 1, 3));

//type alias الاسم المستعار
type st = string;
let theName2: st = "sasa";

type Buttons = {
  up: string;
  down: string;
  left: string;
  right: string;
};

type Last = Buttons & {
  x: boolean;
};
function getActions(btns: Last) {
  console.log(`action for button up is ${btns.up}`);
  console.log(`action for button down is ${btns.down}`);
  console.log(`action for button left is ${btns.left}`);
  console.log(`action for button right is ${btns.right}`);
}
console.log(
  getActions({
    up: "jumb",
    down: "down",
    right: "right",
    left: "left",
    x: true,
  })
);

//data tuple
//is another sort of array type
//we knows exactly how many elements it contains
let article: [number, string, boolean] = [10, "title one", true];

//data type  void and never
//void=>
/**
 * function that will return nothing
 * function in javascript that not return a value will show undefined
 * undefined is not void
 */
function logging(msg: string): void {
  return;
  //we don't return anything
}
console.log(logging("i am a message"));

function logging2(msg: string): void {
  console.log(msg);
  //we don't return anything
}
console.log(logging2("i am a message"));
//never
/**
 * The never type is used when you are sure that something is never going to occur. For example, you write a function which will not return to its end point or always throws an exception.
 */
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

function keepProcessing(): never {
  while (true) {
    console.log("I always does something and never ends.");
  }
}

//In the above example, the throwError() function throws an error and keepProcessing() function is always executing and never reaches an end point because the while loop never ends. Thus, never type is used to indicate the value that will never occur or return from a function.

//Difference between never and void
//The void type can have undefined  as a value where as never cannot have any value.
//In TypeScript, a function that does not return a value, actually returns undefined. Consider the following example.

let something: void = undefined;
let nothing: never = undefined; // Error: Type 'undefined' is not assignable to type 'never'
let something2: void = null; // Error: Type 'null' is not assignable to type 'void'
let nothing2: never = null; // Error: Type 'null' is not assignable to type 'never'

// Error: Type 'null' is not assignable to type 'never'

/***
 * Type Assertions
 * Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own
 */
let myImage = document.getElementById("image") as HTMLImageElement;
console.log(myImage.src);

let data: any = 1000;
//مش هيحصل اى تعديل على القيمه وهتتعامل معامله الاسترينج
console.log("====================================");
console.log((data as string).repeat(3));
console.log("====================================");

//Type Annotations With Object
let myObj: {
  userName: string;
  age: number;
  hire: boolean;
  skills: {
    one: string;
    two: string;
  };
} = {
  userName: "tarek",
  age: 20,
  hire: true,
  skills: {
    one: "html",
    two: "css",
  },
};
//interface
interface User {
  id: number;
  userName: string;
  country: string;
}
let user: User = {
  id: 10,
  userName: "tarek",
  country: "egypt",
};

function getData(data: User) {
  console.log("====================================");
  console.log(
    `id is ${data.id} name is ${data.userName} country is ${data.country}`
  );
  console.log("====================================");
}

console.log("====================================");
console.log(getData({ id: 200, userName: "tarek", country: "egypt" }));
console.log("====================================");

//methods with interface
interface User2 {
  id: number;
  userName: string;
  country: string;
  sayHello(): string;
}
let user2: User2 = {
  id: 10,
  userName: "tarek",
  country: "egypt",
  sayHello() {
    return `Hello ${this.userName}`;
  },
};

console.log("====================================");
console.log(user2);
console.log("====================================");

// Interface Extend
interface Users {
  id: number;
  userName: string;
  country: string;
}
interface Admin extends Users {
  role: string | number;
}
interface Moderator extends Admin, Users {
  protect: boolean;
}
let users: Moderator = {
  id: 100,
  userName: "tarek",
  country: "egypt",
  role: "admin",
  protect: true,
};

// Class Type Annotations
class UserClass {
  user: string;
  salary: number;
  msg: () => string;
  constructor(userName: string, salary: number) {
    this.user = userName;
    this.salary = salary;
    this.msg = function () {
      return `Hello ${this.user} your salary is ${this.salary}`;
    };
  }
}

let userOne = new UserClass("tarek", 4000);
console.log("====================================");
console.log(userOne.user);
console.log("====================================");
console.log(userOne.salary);
console.log("====================================");
console.log(userOne.msg);
console.log("====================================");
