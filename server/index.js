import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3333;
const url = `api.openweathermap.org/data/2.5/weather?q=moscow&appid=${process.env.WEATHER_KEY}`;
app.get('/getWeather', async (req, res) => {
    try {
        const response = await axios.get(url);
        const data = res.json(response.data);
        console.log(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port - ${port}`);
});