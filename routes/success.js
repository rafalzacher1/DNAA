const routes = require('express').Router();

routes.get('/', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions":[{
            "amount":{
                "currency": "USD",
                "total": "30.00"
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function(error, payment){
        if(error) {
            console.log(error.response);
            throw error;
        } else {
           
            console.log(JSON.stringify(payment));
            res.send('success');
        }
    });
});

module.exports = routes;