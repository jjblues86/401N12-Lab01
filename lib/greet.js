'use strict';

const greet = module.exports = {};

greet.sayHello = function(name) {
    if(greet !== 'string') return null;
    return `Hello ${name}`;
};