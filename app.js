const express = require('express');
const app = express();
const payloadSchema = require('./payloadSchema');
const { getClassification, getMode } = require('./types/index');

const jsonValidator = require('jsonschema').Validator;
const bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('dotenv').config();

const validator = new jsonValidator();
validator.addSchema(payloadSchema);

app.post('/', (req, res) => {
    if (req.get('Content-Type') != 'application/json') {
        res.status(400).send('Invalid header format');
    }
    try {
        validator.validate(req.body, payloadSchema, { throwError: true });
        let incomingReq = req.body;

        const classification = getClassification(incomingReq.classification);
        const mode = getMode(incomingReq.mode);
        // unix timestamp 
        const timestamp = new Date().getTime()/1000;
       
        // augment payload 
        incomingReq = {
            ...req.body,
            trafficProcessorTimeStamp: incomingReq.timestamp,
            timestamp,
            classification,
            mode
        }
        delete incomingReq.headers.cookie;
        delete incomingReq.headers.authorization;

        res.status(200).send(incomingReq);
    }
    catch (error) {
        res.status(400).send({"error": {"message": 'Missing ' + error.argument + ' field'}});
    }
});

const PORT =  5000
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});