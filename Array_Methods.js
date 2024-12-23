// //Push
// // The push() method adds one or more elements to the end of an array, returning the new length of the array

// const provisionstore = ["Viswa","Sivanya","Vidhya"];
// provisionstore.push("Harina");
// console.log(provisionstore);

// //Pop
// //The pop() method removes and returns the last element of an array, reducing its length by one

// const rationshop = ["Viswa","Sivanya","Vidhya","Harina"];
// rationshop.pop();
// console.log(rationshop);

// //Unshift
// // The unshift() method adds one or more elements to the beginning of an array, 
// //shifting all other elements to a higher index and returns the new length of an array

// const supermarket = ["Viswa","Sivanya","Vidhya","Harina"];
// supermarket.unshift("Vijay");
// console.log(supermarket);

// //Shift
// //The shift() method removes and returns the first element of an array,
// //shifting all other elements to a lower index, and updates the length of the array

// const supermarket1 = ["Viswa","Sivanya","Vidhya","Harina"];
// supermarket1.shift();
// console.log(supermarket1);

// //Concat
// //The concat() method is used to merge two or more arrays together,
// //creating a new array containing the elements of the original arrays without modifying the original arrays

// const fruits = ["Apple", "Orange"];
// const morefruits = fruits.concat(["pineapple","mango"]);
// console.log(morefruits);

// //Sort
// // The sort() method arranges the elements of an array in ascending or descending order by default modifying the original array

// const num = [10,8,6,4,2,1,3,5,7,9]
// num.sort((a,b)=>a-b)
// console.log(num);

// const alphabet = ["Viswa","Sivanya","harina","nithika","Prithika"]
// alphabet.sort()
// console.log(alphabet);

// const num1 = [10,8,6,4,2,1,3,5,7,9]
// num1.sort((a,b)=>b-a)
// console.log(num1);

// //Slice
// //Slicing extracts a portion of a data structure like a list or string based on specified indices or criteria,
// //allowing for selective retrieval of elements

// const animal = ["elephant","tiger","lion","fox","cheetah"]
// console.log(animal.slice(1));
// console.log(animal.slice(2,-1));
// console.log(animal.slice());

// //Splice
// // Splice is a method used in programming to modify an array by removing or replacing existing element
// // and or adding new elements into it at a specified index position
// //syntax
// //variable_name.splice("index",counter[0,1],actualvalue)
// // 0=> push and update the value
// // 1=> override and update the value

// const weeks = ["sunday","tuesday","wednesday","thursday","saturday"]
// weeks.splice(1,0,"monday");
// weeks.splice(5,0,"friday")
// console.log(weeks);

// //Split
// // Split refers to dividing something into separate parts
// // convert string into array

// var spl = "My Name Is Sivanya"
// var spl2 = spl.split(" ")
// console.log(spl2);

// //Nested Array and object
// //In javascript an object is a collection of key and value pairs
// //It is a fundamental datatype used to store various keyed collections and more complex entities

// const stuobj = [{
//        name:"vicky",
//        age: 12,
//        std: "II",
//     },
//     {
//     name: "vinod",
//     age: 14,
//     std:"III",
//     },
// ];
// console.log(stuobj[1].name);

// //Object Destructuring
// // Object destructuring in javascript allows you to extract multiple 
// //properties from an object and assign them to varibales in a concise and
// //readble way enhancing code readability and reducing repetition

// var obj = {
//     name: "viswa",
//     age: 38,
//     dep: "sceience"
// }
// const{name,age,dep}=obj
// console.log(name,age,dep);

// //Array Destructuring

// const arr = ["sunday","monday","tuesday","wednesday"]
// const [day1,day2,day3,day4]=arr
// console.log(day1);

// //For Methods -> advance for loop concept

// //forEach ->To read the Array
// //syntax:
// //var_name.forEach((value,index,actualarray)=>)

// var day = ["sunday","monday","tuesday","wednesday","thursday"]
// day.forEach((val,indx,actarr)=>console.log(val)
// )

// //forIn -> To read and loop the object
// //syntax:
// //for(var_type var_name in obj_name){
// //code
// //}

// var obj = {
//     name:"faizal",
//     city: "france",
//     b_grp: "A+"
// }
// for(var x in obj){
//    console.log(obj[x]);
//     }

// // //forOf -> array and string loop
// // //syntax:
// // //for(var_type var_name of str_name)

// var str = "java"
// for(var x of str){
// console.log(x);
// }

// // //String Methods
// // //Replace
// var greets = "hello world"
// console.log(greets.replace("hello","welcome"));

// //repeat
// var rep = "hi"
// console.log(rep.repeat(2));

// //MRF(Map,Reduce,Filter)
// //Map:
// //syntax
// //var_name.map(value,indx,actualarray)=>)

// const number = [1,2,3,4,5,6,7,8,9,10];
// const map = number.map((val,indx,actualarray)=>val*2);
// console.log(map);

// // //Reduce: add
// // //syntax
// // //var_name.reduce(accumulator,val.indx,actualarray)=>)

// const reduce = number.reduce((acc,val,indx,actualarray)=>acc+val,3);
// console.log(reduce);

// // //Filter
// // //syntax
// // //var_name.filter((var,indx,actualarray))

// const filter = number.filter((val,indx,actualarray)=>val>5);
// console.log(filter);

// //this

// const obj = {
//     name: "viswa",
//     age:"20",
//     details :  function(){//local scope
//         console.log(this.age);
//     }
// }
// obj.details()

// // //Template literals or string literals
// // //syntax: `${}`

// var a = "Hello"
// var b = "Viswa"
// console.log(a+b+"how are you"); //Old way of getting output
// console.log(`${a} ${b} how are you`);//New way of getting output

// //Settimeout

// setTimeout(()=>{
//     console.log("Welcome");
// },3000)

// //Constructor
// // A constructor method in javascript is a special function used to create and 
// // initialize objects created from a class
// // It setup initial state and behavior for new instance of the class

// function bike(name,model,year){

//     //key           //value
//     this.bikename = name
//     this.bikemodel = model
//     this.bikeyear = year
// }

// const details = new bike("Royal Enfield","Bullet 350","2020")
// console.log(details);

// const details1 = new bike("Hero","Splendor","2024")
// console.log(details1);

// //Class
// // A class is blueprint for creating objects
// // It defines the structure and behavior of objects of a particular type
// //syntax: Classes are declred using the class keyword followed by the class name

// class Student{
//     constructor(name,age,dep){
//         this.name = name
//         this.age = age
//         this.dep = dep
//     }
//     Studentdetails(){
//         console.log(`The name is ${this.name} and the age is ${this.age} and the dep is ${this.dep}`);
//     }
// }
//  const detail = new Student("Sivanya",2,"LKG")
//  detail.Studentdetails()

// //Callback
// // Passing a function into a another functions arguments is called callback method

// function greet(name,callback){
//  console.log(`Hello ${name}`);
//  callback(); 
// }

// function saygoodbye(){
//     console.log("Goodbye");    
// }
// greet("Viswa",saygoodbye);

// //callback
// function name1(){
//     console.log("Viswa");
    
// }
// function greets(x){
//     x()
//     console.log("Hello Good Morning");
    
// }
// greets(name1)

// //Callback Hell
// // Situation in javascript where callbacks are nested within the other callbacks
// // and where the code is difficult to read
// // old pattern to handle asynchronous functions.
// // we can use promises and asunchronous and await to avoid callback hell

// //Asynchronize

// function box1(x){
//     x()
//     console.log("Box 1");
    
// }
// function box2(y){
//     y()
//     console.log("Box 2");
    
// }
// function box3(z){
//     z()
//     console.log("Box 3");
    
// }
// function box4(){
//     console.log("Box 4");
    
// }

// box1(()=>{
//     box2(()=>{
//         box3(box4)
//     });
// });

// //Synchronize

// function num1(x){
// setTimeout(()=>{
// console.log("Number:1");
// x();
// },4000);
// }

// function num2(y){
// setTimeout(()=>{
// console.log("Number:2");
// y(); 
// },2000);
// }

// function num3(z){
// setTimeout(()=>{
// console.log("Number:3");
// z(); 
// },3000);
//  }

//  function num4(){
// setTimeout(()=>{
// console.log("Number:4");
// },1000);
// }

// num1(()=>{
//     num2(()=>{
//         num3(num4);
//     });
// });

//Promise
// Promise is an object which manage the asynchronus operation
// It is used to handle the asynchronus operation to synchronus way
// It will pass two parameters(resolve or reject)
// syntax
// new promise ((resolve,reject)=>{asynchronus code})

//resolve - .then()
//reject - .catch()

//1.Filling watecane in bottle
//2.Clean the room
//3.Take out the trash

// function water(){
// return new Promise((resolve,reject)=>{
// setTimeout(()=>{
// resolve("Water Cane Is Filled");
// },3000);
// });
// }

// function room(){
// return new Promise((resolve,reject)=>{
// setTimeout(()=>{
// resolve("Room is cleaned");
// },500);
// });
// }

// function trash(){
// return new Promise((resolve,reject)=>{
// setTimeout(()=>{
// resolve("Trash is out");
// },4000);
// });
// }

// water().then(value=>{console.log(value);return room()})
//        .then(value1=>{console.log(value1);return trash()})
//        .then(value2=>{console.log(value2);console.log("All Task Completed")})

//.Catch

// function water(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const fillwater = true
//         if(fillwater){
//             resolve("Water Cane Is Filled");
//         }else{
//             reject("water cane is not filled");
//         }
//     },3000);
//     });
//     } 
//     function room(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const rooms = true
//         if(rooms){
//             resolve("Room is cleaned");
//         }else{
//             reject("Room is not cleaned");
//         }
//     },500);
//     });
//     }  
//     function trash(){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const trashcane = false
//         if(trashcane){
//             resolve("Trash is out");
//         }else{
//             reject("trash is not kept outside");
//         }
//     },4000);
//     });
//     }
    
    // water().then(value=>{console.log(value);return room()})
    //        .then(value1=>{console.log(value1);return trash()})
    //        .catch(err=>{console.log(err)})

//Async & Await

//Async: Make a function return to promise
//Await:Make a funcion wait for promise
//Allows us to write asynchronous code into synchronous code

// async function work(){
//     try{
//         const watercane = await water()
//         console.log(watercane);

//         const roomclean = await room()
//         console.log(roomclean);

//         const garbage = await trash()
//         console.log(garbage);
        
//         }catch(err){
//             console.log(err);
            
//         }
// }
// work()

//Inheritance: Accessing one class methods and properties into another class 

class parent{

    bike(){
     console.log("Royal Enfield");   
    }
    car(){
        console.log("Benz");    
    }
    money(){
      console.log("100000");      
  }
}
class Child extends parent{

    house(){
        console.log("Beach House");      
  }
}
const childs = new Child()
childs.bike()
childs.money()
childs.house()