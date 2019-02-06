'use strict';

let greet = require('../lib/greet');

describe('greet.js', () =>{

    describe('#greet', () => {

        test('should return Hello Jabin', () => {
            expect(greet.sayHello('Jabin'), 'Hello Jabin')
        })

})


})
