const services = require("../services/services");
const assert = require("chai").assert;

var data1 = {
  firstUnit: "inch",
  secondUnit: "inch",
  unitValue: 0
};

var data2 = {
  firstUnit: "inch",
  secondUnit: "inch",
  unitValue: 1
};

describe("quantity measurement sinon testing services", function() {
  it("Given zero inch should return zero inch", () => {
    services.convert(data1, (err, data) => {
      if (err) {
        console.log(err);
      }
         assert.equal(data, 0);
    });
  });
  it("Given 1 inch should return 1 inch", () => {
      services.convert(data2, (err,data) => {
          if(err){
              console.log(err);              
          }
          assert.equal(data,1);

      })
  });
  it("Given 1 feet should return 12 inch", ()=> {
      data3 = {
          "firstUnit":"feet",
          "secondUnit":"inch",
          "unitValue":12
      }
      services.convert(data3, (err,data) => {
          if(err){
              console.log(err);
              
          }
          assert.equal(data,1);
      })
  })

});
