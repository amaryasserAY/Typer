"use strict";
console.log(Math.floor(11.5));
let start = "Amar";
let num = 1233;
let names;
let myFrinds = ["amr", "ysasss", "mars"];
let all = "asd";
let allArray = ["a", "b", "c", "d", [22, 3, 5], 1, 2, 3, 4];
function showdata(name, age, country) {
    return ` ${name} -- ${age} -- ${country}`;
}
console.log(showdata("amar", 20));
function addAll(...nums) {
    let ruslt = 0;
    nums.forEach((num) => ruslt += num);
    return ruslt;
}
console.log(addAll(10, 20, 30, 100));
const add = (num1, num2, num3) => num1 + num2 + num;
console.log(add(10, 20, 30));
let artical = [12, "Amar", true];
const [sort, name1, stats] = artical;
console.log(sort);
console.log(name1);
console.log(stats);
const KIDS = 15;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3;
var Level;
(function (Level) {
    Level[Level["KIDS"] = 15] = "KIDS";
    Level[Level["EASY"] = 9] = "EASY";
    Level[Level["MEDIUM"] = 6] = "MEDIUM";
    Level[Level["HARD"] = 3] = "HARD";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level Is ${lvl} And Number of Seconds Is ${Level.EASY}`);
}
let myImag = document.getElementById("my-image");
console.log(myImag.src);
let myObject = {
    username: " Amar",
    id: 100,
    hire: false,
    skills: {
        one: "html",
        two: "css"
    }
};
console.log(myObject.hire);
console.log(myObject.username);
console.log(myObject.skills.one);
let user3 = {
    username: "elzero",
    id: 100,
    stats: false,
    sayHello() {
        return `Hello ${user3.username}`;
    },
};
console.log(user3);
class User2 {
    constructor(username, salary) {
        this.username = username;
        this.ss = salary;
        this.msg = function () {
            return `Hello ${this.username} Youer Salary Is ${this.ss}`;
        };
    }
    sayMsg() {
        return `Hello ${this.username} Youer Salary Is ${this.ss}`;
    }
}
let userOne = new User2("elzero", 2200);
//# sourceMappingURL=index.js.map