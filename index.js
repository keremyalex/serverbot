const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const df = require('dialogflow-fulfillment');

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/' , express.json(), (req, res) =>{
    const agent = new df.WebhookClient({
        request: req,
        response: res
    });

    function demo(agent){
        agent.add('Enviando respuesta desde la Webhook Server');
    }

    function prueba(agent){
        agent.add('Enviando otra prueba desde el server');
    }

    var intentMap = new Map();
    intentMap.set('webhookDemo', demo);

    intentMap.set('testServer', prueba);

    agent.handleRequest(intentMap);

});

app.listen(port, () => console.log('El server esta en el puerto 3000'))