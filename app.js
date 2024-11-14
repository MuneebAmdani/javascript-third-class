// let num=1;
// console.log(num++)
// console.log(num)

// let num=1;
// console.log(++num + ++num)
// console.log(num)

// let num=1;
// console.log(num++ + num++)
// console.log(num)

// var message = "Thanks for your input!" + "Please come back later";
// console.log(message)

// alert("Thanks, " + userName + "!");

// var message = "Thanks, ";
//  var banger = "!";
//  alert(message + userName + banger);

// let name =prompt("Enter your name")
// let message=alert("Welcome " + name)
// console.log(name)

// function printAlert(){
//     alert("Welcome to my site")
// }


// function printPrompt(){
// let msg=prompt("Type your name")
// alert("Welcome to the site " + msg)
// }

// let gender=prompt("Enter your gender ");
// console.log('gender' , gender)
// if(gender=="male"){
//     alert("You are allowed to enter graveyard")
// }
// else if(gender =="female"){
//     alert("You are not allowed to enter")
//     }
// else{
//     alert("Please enter a valid gender")
// }

// function calculateResult(){
// let userNumber=document.getElementById('number').value
// let calculatedPercentage=userNumber/750*100;
// console.log(calculatedPercentage)
// if(calculatedPercentage > 100){
//     alert("Please enter a valid input");
// }
// else if(calculatedPercentage >= 80 && calculatedPercentage <= 100){
//     alert("You got A+ congrats");
// }
// else if(calculatedPercentage >=70 && calculatedPercentage < 80){
//     alert("You got A");
// }
// else if(calculatedPercentage >=60 && calculatedPercentage < 70){
//     alert("You got B");
// }
// else if(calculatedPercentage >=50 && calculatedPercentage < 60){
//     alert("You got C");
// }
// else if(calculatedPercentage >=40 && calculatedPercentage < 50){
//     alert("You got D");
// }
// else if(calculatedPercentage < 50){
//     alert("Please enter a valid input");
// }
// else {
//     alert("You are fail");
// }
// // console.log(userNumber)
// // console.log(percentage)
// }

// let age=21;
// let resident='pakistani';
// let gender='female';

// if(resident == "pakistani" || gender == "male"){
//     alert("welcome to dubai")
// }

// let age=21;
// let resident='pakistani';
// let gender='female';

// if(resident == "pakistani" || gender == "male"){
//     alert("welcome to dubai")
//     if(age > 18){
//         alert("You can drive cars in dubai")
//     }
//     else{
//         alert("You can't drive car in dubai")
//     }
//

// let age=2;
// let resident='pakistani';
// let gender='female';

// if(resident == "pakistani" || gender == "male"){
//     alert("welcome to dubai")
//     if(age > 18){
//         alert("You can drive cars in dubai")
//     }
//     else{
//         alert("You can't drive car in dubai")
//     }
// 

// let name='muneeb';
// let resident='pakistani';
// let gender='male';

// if(resident == "pakistani" && gender == "male" || name == "muneeb"){
//     alert("welcome to dubai")
//     if(gender == "female"){
//         alert("You can drive cars in dubai")
//     }
//     else{
//         alert("You can't drive car in dubai")
//     }
// 

// let color='red';
// let cast='memon';
// if(color == "red" || cast == "punjabi"){
//     alert("You are allowed to visit library")
// }
// else{
//     alert("You are not allowed to visit library")
// }

// let day='friday';
// let month='may';
// if(day !="friday" && month != "may"){
//     alert("You are eligible to go on vacations")
// }
// else{
//     alert("You are not allowed to go on vacations")
// }

// let array = [];
// let stdName = ['muneeb','hanzala','babar','cristiano'] ;
// let stdAge = [12,24,56,72]

// let array = [];
// let std1 = ['zubair',12,true,null];
// let stdAge = [12,15,17,18]

// let array = [];
// let std1 = ['zubair','junaid','amir','kashif'];
// let stdAge = [12,15,17,18]

// console.log(std1[3])

// let std1=['zubair','muneeb','hanzala'];
// std1.push("muneeb")
// console.log(std1)

// let std1=['zubair','muneeb','hanzala'];
// function pushNewStudentName(){
//     let newStdName=prompt("please enter new name")
//     std1.push(newStdName)
// }
//  console.log(std1)


// let std1=['zubair','muneeb','hanzala'];
// function pushNewStudentName(){
//     let newStdName=prompt("please enter new name")
//     std1.unshift(newStdName)
// }
//  console.log(std1)


// let std1=['zubair','muneeb','hanzala'];
// function removeNewStudentName(){
//     let newStdName=prompt("please enter new name")
//     std1.shift()
// }
//  console.log(std1)


// let std1=['zubair','muneeb','hanzala'];
// function removeNewStudentName(){
//     std1.pop()
// }
//  console.log(std1)
 
let class1Std=['zubair','muneeb','hanzala'];
let class2Std=['umair','sameer','amin'];
let stds=[class1Std,class2Std]

console.log(stds)
console.log(stds[0][1])