var jsonFile = require("../model/model");
module.exports = {
  convert(data, callback) {
    unitType1 = data.unitType1
    unitType2 = data.unitType2
    var input = data.unit;
    var keys = Object.keys(jsonFile.gettingUnits()[0]);
    console.log(keys);
    

    for (var i = 0; i < keys.length; i++) {        
        if (keys[i] == unitType2) {
            var unitKeys = Object.keys(jsonFile.gettingUnits()[0][keys[i]])                       
            for (var j = 0; j < unitKeys.length; j++) {
                if (unitKeys[j] == unitType1) {
                   var result = (jsonFile.gettingUnits()[0][keys[i]][unitType1] * input);
            }
          }
        }
      }
      return callback(null, result);

    }
  }


