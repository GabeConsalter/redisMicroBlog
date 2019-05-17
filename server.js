const express = require('express');
const app = express();
const redis = require('redis');
const client = redis.createClient();

app.get('/', (req, res) => {
	res.send('Hello World');
});

client.on('connect', () => console.log('Redis client connected'));
client.on('error', err => console.error('Redis error:', err));

app.listen(3000, () => console.log('Running on 3000'));