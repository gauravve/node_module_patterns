var greet = require('./greet1');
greet();

//When you see .something after required we are reaching down into the module to get a particular property or object
var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

//What require does is that it caches the result of the require fucntion for any particular filename. So this ends up being reference to the same object that was originally created. So no matter how many times you call require the same file in one file it will only ever be called once. Every other time it will be returned from a cache. 
var greet3b = require('./greet3');
greet3b.greet();

//To overcome the caching of require you need to create a new object locally which is what has been done below. 
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

//This is the most popular pattern and this it the one I like as well. 
// This is also knows as the Revealing module pattern. Exposing only the properties and methods you want via the returned object. Clean way to structure and protect code within modules
var greet5 = require('./greet5').greet;
greet5();