const express = require('express');
const app = express();
const productRouter = require('./app/product/routes');
const productRouterv2 = require('./app/product_v2/routes');
const logger = require('morgan');
const path = require('path');



app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use('/api/v1', productRouter);
app.use('/api/v2', productRouterv2);
app.use((req, res) => {
    res.status(404);
    res.send({
        status: 'failed',
        message: 'Resource ' + req.originalUrl + ' not found'
    })

})



app.listen(process.env.PORT || 5000, () => console.log('server running at http://127.0.0.1:5000'));

