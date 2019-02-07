'use strict';

const greet = module.exports = {};

greet.sayHello = function(name) {
    if(typeof name !== 'string') return null;
    return `Hello ${name}`;
};