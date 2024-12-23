//For Loop:

let st = "javascript"
for(var i=0; i<st.length;i++){
console.log(st[i]);
}

let str1 = "javascript"
for(var i=str1.length-1;i>=0;i--){
console.log(str1[i]);
}

let str = "javascript";
output = "";
for (i =str.length-1;i>=0; i--) {
  output += str[i] + " ";
}
console.log(output);

//While Loop:

let count = 0 //initialization
while(count<5){ //condition
  console.log(count);//printing statement
  count++;//iteration
}

//Do-While Loop:

var docount = 0
do{
  console.log(docount);
  docount++
  
}while(docount<5)

//If-Else:

var age = 20

if(age>=18){
  console.log("He is eligible to vote");
  
}else{
  console.log("He is not eligible to vote");
}

let s = 1;
while(s<=10){
  if(s%2==0){
console.log(s);
  }
  s++;
}

//Else-If:

let bustime = 12.00

if(bustime>=9 && bustime<=10){
  console.log("Madurai Bus Will Depart");

}else if(bustime>=10 && bustime<=11){
  console.log("Kerala Bus Will Depart");

}else if(bustime>=3 && bustime<4){
  console.log("Trichy or Salem Bus Will Depart");

}else if(bustime=12){
  console.log("Local Bus Will Depart");
}

//Find Maximum Number

let a = [10,20.36,42,55]
let max =a[0];
for(i=1;i<a.length;i++){
if(a[i]>max)
    max=a[i];
}console.log(max);

//Odd Numbers

let Oddnumber = 0;
while (Oddnumber<=16) {
    if (Oddnumber%2 !==0)
    console.log([Oddnumber]);
    Oddnumber++;
}

//Array - Find Max Number

let maxnumber = [55,42,36,20,10]
maxnumber.sort((a,b)=>b-a)
console.log(maxnumber[0]);
