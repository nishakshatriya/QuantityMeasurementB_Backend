const express = require('express')
const bodyparser = require('body-parser')
const app = express();
const cors = require('cors');

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(cors());

require('../SinonQuantityMeasurement (copy)/routes/routes')(app)

app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
});