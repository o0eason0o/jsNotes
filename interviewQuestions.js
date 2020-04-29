


let server = import 'axios'

axios.get('http://').then((res)=>{return res.data});


async function(){
    let data = await axios.get('address');
}

what is event loop?

node is asynchorous right?

closure in javascript?




let x =100


function a (){

var r

    fucntion b(){
        can we use r here? Yes
    }
}

true + false = ?

2 + true = ?

error first callback pattern?
have you used sequelize?


what is the difference between process.nextTick() and setImmediate()?

package.json

const vs function
const let, var
var 


var 
es6, const let

const x = 10
x = 7;


{
    let x
}






Given an array of integers, return an array of integers which contains
[1st integer, Sum of next 2 integers (2nd, 3rd), Sum of next 3 integers (4th, 5th, 6th)…]

Input size n
[1,6,8,5,9,4,7,2]
Output size m
[1,14,18,9]

function(original){
    let result = [],
        counter = 1,
        arr = original.slice(0);
    
    while(arr.length !== 0){
        let total = 0;
        for(let i = 0; i< counter; i++){
                if(arr.length!== 0){
                    total += arr[0];
                    arr.shift();
                }
        }
        counter+=1;
        result.push(total);
    }
    return result;
}



* Whats the difference between JS and nodeJS?
* what are the benefits of using nodeJS??
* Is there a difference between Angular and nodeJS?
* what is package.json?
* what is express?
* have you used sequelize?
* what is the difference between process.nextTick() and setImmediate()?
* what is the error first callback pattern?




Leqi Steve Zhang







// Morgan stanly

tell me about yourself, past projects
exapmles of the modules you built before

tell me about event bubbling and how to handle it
what is closure? what is hoisting?
how to get async calls

do you know angular or react? angular
what are components?
how do components talk to each other?
what are directives? how to use them and give examples
if you are given a single page application with a lot of graphes, data and stuff, how would you design the page? how do you manage compnents?
what are observables



// Chatbot interview
how to create better user experience
how would you design intents 
how do you collection information and build entities
how do you analyze conversations 
if you have a lot of fields/knowledge/functions you need to cover, how do you design the bot?
how do you test your bots? 

tell me about a technical challenge you faced and how to solve it
how would you handle a situation when you cant finish work on time
if you are given a sizable project and you have 6 month to finish the product. how would you process it
how would you teach and assign tasks with junior developer or colleages in different timezone

what testing technologies do you use
whats the difference between mock and spy
if you are given a module, how would you refactor it? test it?
tell me something big you did in JS when you are working on the chatbot project
how do you secure communications between chatbots and your data bases

what is event loop
what is threading model in js
whats the difference between var, let, const

what is emitter, how do you use it
basic concepts of Rxjs: observer, stream

whats your experience with docker/jenkin 
tell me how you use docker, and what lines do you have/ the process


const express = require('express');
const app = express();
const port = 3000;
/**
 * Echo hello back to the the user!
 *
 * Url: /hello?name=<name>
 *
 * Ex: /hello?name=John
 * Reponse: {
 *    response: 'Hello, John'
 * }
 */
app.get('/hello', function (req, res) {
    let result = {
        response: `Hello, ${req.params.name}`
    };
    return res.send(result);
});

// bonus question: how about POST
app.post('/', function (req, res){
    // magic
    res.send();
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));














