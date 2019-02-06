'use strict';

let greeting = module.exports = {};

greeting.sayHello = function(name) {
    return `Hello ${name}`;
}