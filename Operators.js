//Operators

//Arithmatic Operators(+,-,*,/(quotient),%(modulus),**(exponent(power of values)),++increment,--decrement)

//Addition
var a = 10
var b = 20
console.log(a+b);

//Subraction
var a = 20
var b = 10
console.log(a-b);

//Multiplication
var a = 10
var b = 30
console.log(a*b);

//Division
var a = 100
var b = 50
console.log(a/b);

//Modulus
var a = 15
var b = 3
console.log(a%b);

//Exponent
var a = 5
var b = 2
console.log(a**b);

//Increment
var a = 10
a++
console.log(a);

//Decrement
var a = 10
a--
console.log(a);


//Assignment Operators(+=,-=,/=,%=,**=)

var num = 20;
num += 10; //num=num+10==>20+10
console.log(num);

var num1 = 30;
num1 -= 10;
console.log(num1);

var num3 = 10;
num3 /= 2;
console.log(num3);

var num4 = 40;
num4 %= 5;
console.log(num4);

var num5 = 5;
num5 **= 3;
console.log(num5);

//Comparison Operators (<,>,<=,>=)==Boolean(True or False)

var num6 = 5;
var num7 = 15;
console.log(num6>num7);
console.log(num6<num7);
console.log(num6>=num7);
console.log(num6<=num7);

//Euality Operators
//Double Equals(==)[Loose Equality] //It checks only the values

var a = 30
var b = "30"
console.log(a==b);

//Trible Equals(===)[Strict Equality] //It checks both values and type of data

var a = 30
var b = "30"
console.log(a===b);

//Ternary Operators
//Syntax

//(condition)? statement_true : statement_false

var age = 20
var limit = (age>=18)? "He is eligible for vote" : "He is not eligible to vote"
console.log(limit);

var age = 1000
var limit= (age>=18 || age<=70)? "He is eligible for vote" : "He is not eligible to vote"
console.log(limit);



