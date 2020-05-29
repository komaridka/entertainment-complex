const express = require('express');
const router = express.Router();
const { Order } = require("../models/order");

router.post('/', (req, res)=>{


    (async () => {

        Order.create({
            email: req.body.email,
            event: req.body.event,
            message: req.body.message,
            name: req.body.name,
            phone: req.body.phone
        });



        res.send(200)

    })();

});


module.exports = router;
