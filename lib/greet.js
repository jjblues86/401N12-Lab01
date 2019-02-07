'use strict';

const greeting = module.exports = {};

greeting.sayHello = function(name) {
    return `Hello ${name}`;
};