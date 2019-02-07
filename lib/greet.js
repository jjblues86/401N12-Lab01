'use strict';

const greeting = module.exports = {};

greeting.sayHello = function(name) {
    if(greeting !== 'string') return null;
    return `Hello ${name}`;
};