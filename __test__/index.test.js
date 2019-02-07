'use strict';

const greet = require('../lib/greet');
const faker = require('faker');

describe('#lib/greet.js', () => {
    // Jerome - here we'll write all our tests

    test('These are all the tests', () => {
        // ARRANGE
        // const randomNumber = 15;
        const aBoolean = true;
        const aName = faker.name.firstName();
        const world = 'world';

        // ACT
        // no act

        // ASSERT
        // expect(greet(randomNumber)).toBeNull();
        expect(greet.sayHello(aBoolean)).toBeNull();
        expect(greet.sayHello(aName)).toBe(`Hello ${aName}`);
        expect(greet.sayHello(world)).toBe('Hello world');

    });

});