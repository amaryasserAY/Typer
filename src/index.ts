console.log(Math.floor(11.5))


let start : string= "Amar";
let num : number = 1233;
let names : any;

let myFrinds : string[] = ["amr", "ysasss", "mars"];

let all : (string | number) = "asd"; 


let allArray : (string | number | number[])[] = ["a", "b", "c", "d",[22,3,5],1,2,3,4]


function showdata (name: string,age: number,country?: string){


    return ` ${name} -- ${age} -- ${country}` ;
}

console.log(showdata("amar",20))




function addAll(...nums : number[]) : number {
    let ruslt : number = 0;
    nums.forEach((num : number)=> ruslt += num)
    return ruslt;
}

console.log(addAll(10,20,30,100))

// ?? arrow function  


const add =  (num1 : number , num2 : number, num3 : number) : number =>  num1 + num2 + num;

console.log(add(10,20,30));


//  *** Data types  Type Alies

//  ? Tuple  ******************************


let artical : readonly [number,string,boolean] = [12,"Amar",true];

const [sort,name1,stats] = artical;

console.log(sort)
console.log(name1)
console.log(stats)


// ? Void  & Never ****************

//  ? Enum ****************************


const KIDS = 15 ;
const EASY = 9;
const MEDIUM = 6;
const HARD = 3 ;

enum Level {
    KIDS = 15,
    EASY = 9,
    MEDIUM = 6,
    HARD = 3
}
 
let lvl  : string = "Easy" ;

if (lvl === "Easy") { 
    console.log(`The Level Is ${lvl} And Number of Seconds Is ${Level.EASY}`)
}


//  *** let myImag = document.getElementById("my-image") as HTMLImageElement;

let myImag = <HTMLImageElement> document.getElementById("my-image")  ;
console.log(myImag.src)


//??Object With Annotations


 let myObject : {

   readonly username : string,
    id : number,
    hire? : boolean,
    skills : {
        one: string,
        two : string
    }
}={
    username : " Amar",
    id : 100,
    hire : false ,
    skills : {
        one :"html",
        two : "css"

    }

};

console.log(myObject.hire)
console.log(myObject.username)
console.log(myObject.skills.one)


//********************** InterFace */

interface User {
    readonly username : string,
    id : number ,
    stats? : boolean,
    sayHello (): string 
}

let user3 : User ={
 username : "elzero",
id : 100,
stats : false,
sayHello (){
    return `Hello ${user3.username}`;
},
}
console.log(user3)


//  ?? Class with Type Annotations




class User2 {

    username : string;
    ss : number;
    msg : ()=> string;


constructor(username : string ,salary: number){

this.username = username;
this.ss = salary;

this.msg = function(){
    return `Hello ${this.username} Youer Salary Is ${this.ss}`;
}

}

sayMsg(){
    return `Hello ${this.username} Youer Salary Is ${this.ss}`;

}
}



let userOne = new User2("elzero",2200);
const user2 = new User2("amar",100);
const usera = new User2("amara",1000);








