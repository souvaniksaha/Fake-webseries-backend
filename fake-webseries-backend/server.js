const express = require('express');
const freeseriesroute = require('./routes/freeseries');
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = 3000;

app.use('/api',freeseriesroute);

app.get('/', (req,res) => {
    res.send('hi its work');
})

app.listen(PORT, () => {
    console.log(`Server has started at PORT ${PORT}`);
})