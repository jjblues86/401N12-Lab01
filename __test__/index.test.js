'use strict';

const greet = require('../lib/greet');
const faker = require('faker');

describe('#greet.test.js', () => {
    // Jerome - here we'll write all our tests

    test('You say hello', () => {
        // ARRANGE
        const randomNumber = 15;
        const aNullValue = null;
        const fifty = 50;

        // ACT
        // no act

        // ASSERT
        expect(randomNumber).toEqual(15);
        expect(fifty).toBeLessThan(100);
        expect(fifty).toBeGreaterThan(10);
        expect(aNullValue).toBeNull();
        const firstArgument = faker.random.number();
        const secondArgument = faker.random.number();
        expect(myModule.myFunction(firstArgument, secondArgument).toEqual(firstArgument + secondArgument));

    });

    test('Showcasing how to add another test ', () => {
        //ARRANGE
        const aTruthyValue = 'hi';
        const aFalsyValue = 0;

        //ACT

        //ASSERT
        expect(aTruthyValue).toBeTruthy();
        expect(aFalsyValue).toBeFalsy();
        expect(aTruthyValue).not.toBeFalsy();
    });

    test('greet.sayHi should say hi and ask about Jabin', () => {
        //ARRANGE
        //ACT
        const returnValue = greet.sayHello('Jabin');

        // ASSERT
        expect(returnValue).toEqual('Hello Jabin. Have you met my dog khalesi?');
    });

});