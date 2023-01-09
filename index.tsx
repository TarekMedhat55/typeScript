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
