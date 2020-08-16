


let server = import 'axios'
import { cachedDataVersionTag } from 'v8';
import { pipeline } from 'stream';

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







// chase (vendor)
tell me about your past experience
what did you do when you were with chase
which version of angular do you use and what did you do
tell me about the frameworks. blueJs, angular, react
how do components talk to each other
design this: an app with login and a dashboard with data and graph
where do you store user info? how about log in info?
what is interface 
what is pipe 
what is ng material
how does child and parents components talk to each other
whats emitter, how do you use it
if your teammate come to you and say theres a better solution. what would you do
tell me about you lead expereince 



// apple vendor



function test (input){

    let result;
    
    fetch('address').then((res)=>{
      result = res.json();
    }).catch((rej)=>{
      
    });
  
    
    
    //   do something with the input
    
    
    
    
    return result;
  }
  
  
  
  
  let answer = new Promise(),
      x = 3;
  
  async function yourName (){
    Promise.resolve('name');
  }
  
  let result2 = await yourName();
  
  
  
  
  function test3 (){
    let y = 10,
        parsedData;
    
    
    function test4(){
      //     modify your parsedData
      return 100 - y;
    }
    
    
    
  
  }
  
  
  test3();
  // 3
  
  
  (function() {
      console.log(5); 
      setTimeout(function(){console.log(6)}, 1000); 
      setTimeout(function(){console.log(1)}, 0); 
      console.log(4);
  })();
  
  // 5 , 4 , 1, 6
  
  
  
  var example = {
      _name: ‘XXX',
      getProg: function (){
          return this._name;
      }
  };
  
  var Identity = example.getProg;
  console.log(Identity()); // ""
  // to show 'XXX'
  Identity.bind(exapmle)(); // 'XXX'
  console.log(getProg()); //error
  console.log(example.getProg()); // XXX
  
  
  var example2 = {_name: 'YYY'}
  example.getProg.bind(example2);
  
  
  //route to /demo
  var app=express();
  app.get('/demo', (req, res) => {
  
  //   do something with your req
    
    return res.resonpse();
  
  });
  
  app.use('/demo',router);
  router.route('/url')  
  
  
  $.post
  axios.get('')
  fetch('youraddress') // get
  fetch('youraddress', {
    method:'POST',
    body: body,
    'contenttype'
  });
  
  rxjs
  redux.js
  stream
  
  observables.subscribe((event)=>{
    console.log(event.mouse.x);
    console.log(event.mouse.y);
  });
  
  window.initialstate
  -node {
    
   example:[example1,example2....];
   program: {;;;}
    number: 3;
  }
  
  component
  this.example[0];
  
  injection?
    
  class component name4 {
    constructor ( yourServiceName ){
      this.myService = yourServiceName;
    }
  }  



// apple interview

/**
 * George is a grocery store manager. He is trying re-stock the store inventory.
 * He keeps his optimum inventory in demandInventory Object.
 * He have his current inventory level in currentInventory Object.
 * He needs your help to figure out what he should be ordering to keep his store inventory to optimum.
 * Complete the order() function so that George can calculate the what he needs order from supplier.
 */

/**
 * Optimum item inventory George always tries to keep in stock
 * @type {Array.<Object>}
 */
let demandInventory = [
    { "item": "apples", "quantity": 5},
    { "item": "oranges", "quantity": 8},
    { "item": "carrots", "quantity": 2},
    { "item": "mango", "quantity": 10},
    { "item": "brocoli", "quantity": 15},
    { "item": "lemon", "quantity": 3},
    { "item": "chillipowder", "quantity": 2},
    { "item": "onions", "quantity": 5},
    { "item": "ketchup", "quantity": 8}
];

/**
 * Current item inventory George have in stock
 * @type {Array.<Object>}
 */
let currentInventory = [
    { "item": "apples", "quantity": 3},
    { "item": "oranges", "quantity": 2},
    { "item": "carrots", "quantity": 5},
    { "item": "mango", "quantity": 2},
    { "item": "brocoli", "quantity": 3},
    { "item": "chillipowder", "quantity": 3},
    { "item": "onions", "quantity": -2},
    { "item": "ketchup", "quantity": 1}
];

/**
 * Order should return the list of grocery items and counts that can be passed to supplier
 * @return {Array.<Object>} Array of objects containing the items and quantities
 */
function order() {
  
  let result = [],
      currentInventoryMap = {};
  
  currentInventory.map((item)=>{
    currentInventoryMap[item.item] = item.quantity;
  });

  demandInventory.map((itemObj)=>{
    let quantity = (currentInventoryMap[itemObj.item] && itemObj.quantity - currentInventoryMap[itemObj.item]) || itemObj.quantity;
    
    if(quantity > 0){
      result.push({
        item: itemObj.item,
        quantity: quantity
      });
    }
  });
  return result;
}

order();

// how to write tests
mockResult = {
  'itemName': 123123,
  'oranges' : 123123
};

let result = order(mockMend, mockCurrent);
expect(result).to.be.deepEqual(mockResult);

result.forEach((itemObj)=>{
  expect(itemObject.quantity).to.be(mockResult[itemObject.item]);
  
});

// in HTML
body
  h1 item list
  div#item-list
  div  *ngFor 
    p {{item-list.item}}: 
    p {{item-list.quantity}}
    button.order ngClass = inventory-list.item.quantity - order.item.quantity > 0? 'onSale': 'soldOut';

item-list.soldOut




// second round apple