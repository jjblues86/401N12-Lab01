'use strict';

const greet = require('../lib/greet');
const faker = require('faker');

describe('#lib/greet.js', () => {
    // Jerome - here we'll write all our tests

    test('You say hello', () => {
        // ARRANGE
        // const randomNumber = 15;
        const aBoolean = true;
        const aName = faker.name.firstName();
        const world = 'world';

        // ACT
        // no act

        // ASSERT
        // expect(greet(randomNumber)).toBeNull();
        expect(greet(aBoolean)).toBeNull();
        expect(greet(aName)).toEqual(`hello ${aName}`);
        expect(greet(world)).toEqual('hello world');

    });

});