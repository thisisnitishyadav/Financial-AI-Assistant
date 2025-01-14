const express = require('express');
const bodyParser = require('body-parser');
const assistantRoutes = require('./routes/assistant');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use('/api/assistant', assistantRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
