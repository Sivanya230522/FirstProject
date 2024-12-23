// //Push
// const provisionstore = ["Viswa","Sivanya","Vidhya"];
// provisionstore.push("Harina");
// console.log(provisionstore);

// //Pop
// const rationshop = ["Viswa","Sivanya","Vidhya","Harina"];
// rationshop.pop();
// console.log(rationshop);

// //Unshift
// const supermarket = ["Viswa","Sivanya","Vidhya","Harina"];
// supermarket.unshift("Vijaya");
// console.log(supermarket);

// //Shift
// const supermarket1 = ["Viswa","Sivanya","Vidhya","Harina"];
// supermarket1.shift();
// console.log(supermarket1);

// //Concat
// const fruits = ["Apple", "Orange"];
// const morefruits = fruits.concat(["pineapple","mango"]);
// console.log(morefruits);

// //Sort
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
// const animal = ["elephant","tiger","lion","fox","cheetah"]
// console.log(animal.slice(1));
// console.log(animal.slice(2,-1));
// console.log(animal.slice());

// //Splice
// const weeks = ["sunday","tuesday","wednesday","thursday","saturday"]
// weeks.splice(1,0,"monday");
// weeks.splice(5,0,"friday")
// console.log(weeks);

// //Split
// var spl = "My Name Is Sivanya"
// var spl2 = spl.split(" ")
// console.log(spl2);

// var spl = "MyNameIsSivanya"
// var spl2 = spl.split("")
// console.log(spl2);

// //Join

// var name = ["Sivanya","Viswanath"];
// var joinedname = name.join("");
// console.log(joinedname);

// //Reverse

// let reverse = "viswanath"
// let rev = reverse.split("").reverse().join("");
// console.log(rev);

// //Charat

// var str = "Ajith" //It will considered this value as index
// console.log(str.charAt(0));

// //Indexof

// var idx = ["Java","Javascript","Python"] //It will take the first occurence
// let index = idx.indexOf("Javascript");
// console.log(index);

// //LastIndexOf

// var idx2 = ["C","C++","Nodejs","Mangodp"]
// let index1 = idx2.lastIndexOf("Nodejs");
// console.log(index1);

// //Uppercase

// var upper = "sivanya"
// console.log(upper.toUpperCase());

// //Lowercase

// var lower = "VISWANATH"
// console.log(lower.toLowerCase());

// //Includes

// var inc = "javat"
// var inc2 = inc.includes("j");
// console.log(inc2);

// //Substring

// var sub = "viswanathdharmalingam"
// console.log(sub.substring(9));

// //Object
// //Collection of key and value pairs
// //json - javascript object notation

// const obj = {
//     name: "sivanya",
//     age: "2.5",
//     std: "prekg",
// }
// console.log(obj);

// //update the value in object

// obj.name="viswa",
// obj.age="38",
// obj.std="pg"
// console.log(obj);

// //see the value in obj

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.std);


//Nested Array & Object

// const studentid = [{
//     name: "harina",
//     age: '5',
//     std: 'I',
//     p_no: '7338941950',
// },
// {
//     name: "sivanya",
//     age: '8',
//     std: 'III',
//     p_no: '9629708359',
// },
// {
//     name: "vidhya",
//     age: '10',
//     std: 'V',
//     p_no: '9884578523',
// },
// {
//     name: "nithika",
//     age: '7',
//     std:'IV',
//     p_no: '8875315845'
// },
// {
//     name: "prithika",
//     age: '6',
//     std: 'II',
//     p_no: '9685478563',
// },
// {
//     name: "viswa",
//     age: '6',
//     std: 'II',
//     p_no: '9685478563',
// },
// ];
// console.log(studentid[3].name,studentid[3].age,studentid[3].std,studentid[3].p_no);
// console.log(studentid[5].name,studentid[5].age,studentid[5].std,studentid[5].p_no);
// console.log(studentid[2].name,studentid[2].p_no);

//Object Destructuring
// const officeidcard = [
//     {
//     name:"vicky",
//     dep:"sales",
//     id_no: 288569,
//     b_grp: "A+",
//     },
//     {
//     name:"vinod",
//     dep:"IT",
//     id_no: 288789,
//     b_grp: "AB+",
//     },
//     {
//     name:"ravi",
//     dep:"hr",
//     id_no: 288526,
//     b_grp: "B+",
//     },
//     {
//     name:"raghu",
//     dep:"finance",
//     id_no: 288412,
//     b_grp: "A-",
//     },
//     {
//     name:"sami",
//     dep:"housekeeping",
//     id_no: 288326,
//     b_grp: 'AB-',
//     },
// ];
// const{name,dep,id_no,b_grp}=officeidcard
// console.log(officeidcard[3].name,officeidcard[3].dep,officeidcard[3].id_no,officeidcard[3].b_grp);

//Filter_Task
//var_name.filter((var,indx,actualarray))

// const number = [1,2,3,4,5,6,7,8,9,10];
// const evennumber = number.filter((val,indx,actualarray)=>val%2==0);
// console.log("Even Numbers:",evennumber);
// const oddnumber = number.filter((val,indx,actualarray)=>val%2==1);
// console.log("ODD Numbers:",oddnumber);

//Class

// class Office{
// constructor(comp_name,name,age,desig,bld_grp,mobi_num){

//     this.comp_name=comp_name
//     this.name = name
//     this.age = age
//     this.desig = desig
//     this.bld_grp = bld_grp
//     this.mobi_num = mobi_num
// }
// Officedetails(){
//     console.log(`Company: ${this.comp_name}`);
//     console.log(`Name: ${this.name}`)
//     console.log(`Age: ${this.age}`);
//     console.log(`Designation: ${this.desig}`);
//     console.log(`Blood Group: ${this.bld_grp}`);
//     console.log(`Mobile Number: ${this.mobi_num}`);
// }
// }
// const detail = new Office("Infosys","Sivanya",20,"Associate","O+",7338941950)
// detail.Officedetails()

//Promise Task

//Synchronous
// function wakeup(){
// return new Promise((resolve,reject)=>{
// setTimeout(()=>{
// resolve("Wake Up At 5 AM");
// },3000);
// });
// }

// function gymtraining(){
// return new Promise((resolve,reject)=>{
// setTimeout(()=>{
// resolve("Going to Gym");
// },500);
// });
// }

// function office(){
// return new Promise((resolve,reject)=>{
// setTimeout(()=>{
// resolve("Going to Office");
// },4000);
// });
// }

// wakeup().then(value=>{console.log(value);return gymtraining ()})
//        .then(value1=>{console.log(value1);return office()})
//        .then(value2=>{console.log(value2);console.log("All Task Completed")})

//Asynchronous

function wakeup(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const wakesup = true
        if(wakesup){
            resolve("Wake Up At 5 AM");
        }else{
            reject("Not Wake Up At 5 AM");
        }
    },3000);
    });
    } 
    function gymtraining(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const gym = true
        if(gym){
            resolve("Going to Gym");
        }else{
            reject("Not going to gym");
        }
    },500);
    });
    } 
    function office(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const offi = false
        if(offi){
            resolve("Going to Office");
        }else{
            reject("Not going to office due to health issue");
        }
    },4000);
    });
    }
    gymtraining().then(value=>{console.log(value);return wakeup()})
           .then(value1=>{console.log(value1);return office()})
           .catch(err=>{console.log(err)})
           //.then(value2=>{console.log(value2);console.log("All Task Completed")})

