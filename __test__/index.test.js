'use strict';

let greet = require('../lib/greet');

describe('greeting', () => {

    test('be nice', () => {
        expect(greet.sayHello('Jabin')).toBeTruthy();

    });

});