const utils = require('./utils');
const expect = require('expect');

// call mocha in package.json - test
it("should add two numbers", () => {
    var result = utils.add(33, 11);
    if (result != 44) {
        // test fail
        throw new Error(`Expected 44 but returned ${result}`);
    }
});

it("should async add 2 numbers",(done)=>{
    utils.asyncAdd(4,3,(sum)=>{
        expect(sum).toBe(7).toBeA('number');
        done();
    });
})


it("should square a number", () => {
    var rs = utils.square(9);
    // if (rs != 81) {
    //     throw new Error(`Expected 81 but returned ${rs}`);
    // }
    expect(rs).toBe(81).toBeA('number');
});


it("should square async a number",(done)=>{
    utils.asyncSquare(5,(square)=>{
        expect(square).toBe(25).toBeA('number');
        done();
    })
});

it("should not be 80", () => {
    var rs = utils.square(3);
    expect(rs).toNotBe(10);
    expect({
        name: 'Andrew'
    }).toEqual({
        name: 'Andrew'
    });
    expect([2, 3, 4]).toInclude([2]);
    expect([2, 3, 4]).toExclude(5);
    expect({
        name: 'haidar',
        age: 25
    }).toInclude({
        age: 25
    })
    expect({
        name: 'haidar',
        age: 25
    }).toExclude({
        age: 26
    })
});

it('should produce user given user and names', () => {
    var oldUser ={location:'gs'};
     var User = utils.setName(oldUser, 'haidar dargaye');
    expect(User).toInclude({
        lastname: 'dargaye'
    }).toBeA('object');
    expect(User).toEqual(oldUser);// by reference
});


//nodemon --exec "npm test"
// automatically reloads test on changes
// npm run test-watch -add test-watch: "nodemon --exec \"npm test\"" in package.json
//toBe uses tripple equal to check