'use strict';

const greet = require('../lib/greet');
const faker = require('faker');
const arithmetic = require('../lib/arithmetic');

describe('#lib/greet.js', () => {
    // Jerome - here we'll write all our tests

    test('These are all the greet tests', () => {
        // ARRANGE
        const randomNumber = 15;
        const aBoolean = true;
        const aName = faker.name.firstName();
        const world = 'world';

        // ACT
        // Jerome - no act

        // ASSERT
        expect(greet.sayHello(randomNumber)).toBeNull();
        expect(greet.sayHello(aBoolean)).toBeNull();
        expect(greet.sayHello(aName)).toBe(`Hello ${aName}`);
        expect(greet.sayHello(world)).toBe('Hello world');

    });

});

    describe('#arithmetic.js', () => {
        // Jerome - here we'll write all our arithmetic tests

        test('These are all the arithmetic module tests', () => {
            // ARRANGE
            const oneNum = faker.random.number();
            const twoNum = faker.random.number();
            const threeNum = faker.random.number();

            // ACT
            // Jerome - no act

            // ASSERT
            // expect(arithmetic.add(oneNum,twoNum)).toEqual(oneNum + twoNum);
            // expect(arithmetic.subtract(oneNum,twoNum)).toEqual(oneNum - twoNum);
            // expect(arithmetic.multiply(oneNum,twoNum)).toEqual(oneNum * twoNum);
            // expect(arithmetic.divide(oneNum,twoNum)).toEqual(oneNum / twoNum);

            expect(arithmetic.add([oneNum,twoNum,threeNum])).toEqual(oneNum + twoNum + threeNum);
            expect(arithmetic.subtract([oneNum,twoNum,threeNum])).toEqual(oneNum - twoNum - threeNum);
            expect(arithmetic.multiply([oneNum,twoNum,threeNum])).toEqual(oneNum * twoNum * threeNum);
            expect(arithmetic.divide([oneNum, twoNum])).toEqual(oneNum / twoNum);

        });
    });

