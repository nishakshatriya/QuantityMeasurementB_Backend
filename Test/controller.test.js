const assert = require('chai').assert;
const sinon = require('sinon')
const services = require('../services/services');
const controller = require('../controller/controller');

req = {
    "FEET":"2"
}

res = {
    send : function(){}
}

describe('asdfghjk', function(){
    beforeEach(function(){
        sinon.stub(services,'findAll').yields(null,"hey")
    })

    it('asdf',()=>{
        let mock = sinon.mock(res);
        mock.expects('send').once().withExactArgs("hey");
        controller.findData(req,res);
        mock.verify()
    })
})


