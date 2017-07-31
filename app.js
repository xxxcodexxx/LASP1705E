//tao server html

const http = require("http");
const fs = require("fs");
http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html"});
    let data = fs.readFileSync(__dirname + "/Index.html", "utf-8");
    res.end(data);
}).listen(8080);

// function test(){
//         console.log('me and you');
// }
// test();

//Huong doi tuong
// var person = {Name:"Xcode", Age:21}
// console.log(person);
// console.log(`My name: ${person.Name}`);
// var person = {
//     firstName: 'John',
//     lastName : 'Doe',
//     id       : 5566,
//     fullName: function (){return this.firstName + this.lastName} 
// };
// console.log(person.fullName());

//Mang
// var person = [{Name:"Xcode", Age:21}, {Name:"Xcode279", Age:21}, {Name:"Xcode0711", Age:21}];
// console.log(person[1].Name);
// person.forEach((i, idex)=>{
//         console.log(`${idex}. Name: ${i.Name}, Age: ${i.Age}`);
// });

//Json
// var text = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// var obj = JSON.parse(text);
// obj.employees.forEach(function(element) {
//     console.log(`employees Name: ${element.firstName}`);
// }, this);

//Tao server text
// const express = require(`express`);
// const app = express();
// app.listen(300, ()=>console.log(`server is up`));
// app.get(`/`,(req, res)=>{
//     let a = add(5,5);
//     let b = sub(5,5);
//     res.send(`my name ${name} va  tong = ` + add(6,5) +` hieu = `+ sub(6,5));
    
// });

// const name = "xcode"
// let year = "2016"
// let num = 3;
// console.log("my name is", name);//truyen thong
// console.log("my name is " + name);//truyen thong
// console.log(`my name is ${name}`);//es 6
// console.log(typeof num)

// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return (a-b);
// }
// function call(a, b){
//     console.log(sub(a,b));
//     console.log(add(a,b));
// }
// call(7,8);
// console.log(typeof sub(7,8).toString());