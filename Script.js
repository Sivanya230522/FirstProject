//Printing Statement:

//console.log();

//console.log("hello im js");

//console.log("hello world");

//print the code:

//extension: code runner
//terminal: node file_name
//chrome: live server extension

//how to write the javascript code
//syntax
//variable_type variable_name = value;
//console.log(variable_name);

//variable types
//var
//let
//const

//var
      var a = 10 //redeclare
      a = 5 //reassign
      console.log(a);

 //let
       let b = 19; //it can't redeclare
       b = 12;  //ressign
       console.log(b);

  //const

    const c = 20;
    c = 100;
    console.log(c);

     //Datatypes:
     //Primitive Datatype
     
     //String - "viswana051085%^$^*#@" and 'hello'

     var str = "Hello How Are You"
     console.log(str);

     //Number - 100 and 108.50

     var num = 110.50
     console.log(num);

     //Boolean - True or False
     //Null

     var a = null
     console.log(a);

     //undefined

     var e
     console.log(e);
     
     //Non Primitive Datatype

     //Array[] - collection of value and data within the square bracket

     var array = ["sivanya",123,147.45,true,null]
     console.log(array[4]);

     //Object{} - collection of key and value pairs

     var obj = {

        name: "viswa",
        class: "x",
        b_grp: 'A+'
     }
     console.log(obj);

     //Function Statement:

     //A function statement in javascript is used to define a named function with optional parameters and a body of code to execute
     //when the function is called

     function name(){
        let num1 = 50;
        let num2 = 20;
        let divival = num1/num2
        console.log(divival);
     }
     name()

     function name2(){
        let num3 = 40;
        let num4 = 20;
        let divival = num3%num4
        console.log(divival);
     }
     name2()

     //function : block of code
     //function statement or declaration
     //syntax:
     //function var_name(){

    //}
    //var_name()

    //parameters - is like a variable name
    //arguments - is like a value

    function bbhome(x){
        //parameters
        console.log("birthdayboy")
        console.log("relatives & friends")
        console.log(x)
    }
    bbhome("butterscotch cake");//arguments

    //Function Expression:

    //A function expression is javascript is a way to define a function as part of and expression
    //typically by assigning it to a variable.Unlike function statement.

    //function expression can be anonymous (where the function doesnot have a name or named )
    //syntax
    //const newfn = function(){
    // console.log("hello im function expression")
    //}
    //newfn()

    //var_type var_name = value
    var a = 10
    console.log(a);

    function box(x){
        return x
    }
    console.log(box(22))

    //function expression

    var bigbox = function(){ //anonmous function
        console.log("im a small box")
    }
    bigbox()

    //Hoisting:

    //Hoisting is a javascript mechanism where variables declarations are moved to the top of their containing scope during the compilation phase,
    //regardless of where they're declared in the code

    //GEC - Global Execution Context:

    //The Global Execution Context (GEC) is the environment in which javascript code is executed globally
    //It consists of Two Phase: The creation phase, where variables and functions are hoisted and memory 
    //And the execution phase where the code is actually run.

    //CallStack:

    //The callstack is a data structure used by the javascript engine to manage the execution context of
    //It keeps track of the order in which functions are called and executed
    //Callstack works in LIFO - Last In First Out