'use strict';

const arithmetic = module.exports = {};

// Add
arithmetic.add = (arr) => {
    console.log(arr);
    return arr.reduce((a,b) => a + b);
};

// Subtract
arithmetic.subtract = (arr) => {
    return arr.reduce((a,b) => a - b);
};

// Multiply
arithmetic.multiply = (arr) => {
    return arr.reduce((a,b) => a * b);
};

// Divide
arithmetic.divide = (arr) => {
    return arr.reduce((a,b) => a / b);
};