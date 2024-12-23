//syntax: ()=>{}

    var fun = ()=>{
        console.log("This is an arrow function");
    }
    fun();

//=========================================================================
//without parameters

    var fun1 = ()=>{
        console.log("Arrow Function");
    }
    fun1();

//=========================================================================
//with parameters

var fun2 = (a,b)=>{
    console.log(a+b);    
}
fun2(2,4);

//===========================================================================
//IIFE - Immediate invoke function expression
//IIFE without parameter

(function (){
    console.log("this is an IIFE without parameter");
})
();

//IIFE with parameter

(function (value){
    console.log(value);   
})("This is an IIFE with parameter");


(function multiply(num){
    console.log(num*8);
    
})(2);

(function multiply(){
    console.log(2*8);
    
})();

let arr = (v)=>{console.log(v)};
arr("Viswa");


//============================================================================
// var num = 34;
// //num++; //num=num+1
// //num--; //num=35-1
// console.log(num++); //num=34,35==post increment
// console.log(++num); //35+1,36==pre increment
// console.log(num--);
// console.log(--num);
// //===========================================================================





