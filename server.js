var axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h3>Success</h3>');
});

app.get('/data', async (req, res) => {
    try {
        const response = await axios.post('https://ap-south-1.aws.data.mongodb-api.com/app/data-ikjvy/endpoint/data/v1/action/find', {
            collection: 'loanbook',
            database: 'loanbook',
            dataSource: 'loanbook'
        }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'vphNwIlb2qBAdP8XlvAMUt4veKDeKPAZA1OtKmjwDfFrpabqiAwwS7dFQcQ6II8d'
            }
        });

        console.log(response);

        const data = response.data.documents;
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});