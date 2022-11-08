let axios = require("axios")


let getLondonweather = async function (req, res) {

    try {
        let london = req.query.q;
        let appid = req.query.appid;
        let option = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${london},&appid=${appid}`,
        };
        let result = await axios(option);
        console.log(result.data);
        res.status(200).send({ msg: result.data });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.message });
    }
};

let getLondonTemperature = async function (req, res) {
    try {
        let london = req.query.q;
        let appid = req.query.appid;
        let option = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${london},&appid=${appid}`,
        };
        let result = await axios(option);
        console.log(result.data);
        res.status(200).send({ Temperature: result.data.main.temp });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.message });
    }
};

const sortbytemp = async (req, res) => {
    try {
        const { apikey } = req.query;
        const cities = ["bengaluru", "mumbai", "delhi", "kolkata", "chennai", "london", "moscow"];
        const temp = [];
        for (let i = 0; i < cities.length; i++) {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${apikey}`);
            temp.push({ city: cities[i], temp: response.data.main.temp });

        }
        temp.sort((a, b) => a.temp - b.temp);
        res.status(200).json(temp);
    } catch (error) {
        res.status(500).json(error);
    }
};

let memes = async function (req, res) {
    try {
        let templateid = req.query.template_id;
        let text0 = req.query.text0;
        let text1 = req.query.text1;
        let username = req.query.username;
        let password = req.query.password;
        let option = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${templateid}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
        };
        let result = await axios(option);
        res.send({ data: result.data });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.message });
    }
};

module.exports.getLondonweather = getLondonweather;
module.exports.getLondonTemperature = getLondonTemperature;
module.exports.sortbytemp = sortbytemp;
module.exports.memes = memes;