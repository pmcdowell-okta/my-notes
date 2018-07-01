exports.handler = (event, context, callback) => {
	
var inventory= {
    "inventory": [
    { "id":"112345", "make":"Jeep", "model":"Wrangler", "class":"Offroad", "desc":"Radio, CD, Anti-Theft Device, Anti-Skid Device, 4x4, Removable Top, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Power Mirrors, Power Windows, Tilt Steering\n", "price":"35", "avail":"true", "image_url":"https://www.cstatic-images.com/car-pictures/xl/usc80jes162b021001.png" },
    { "id":"122346", "make":"Ford", "model":"Explorer", "class":"SUV", "desc":"CD, Anti-Theft Device, Anti-Skid Device, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Dual Mirrors, Power Brakes, Power Driver Seat, Power Mirrors, Power Steering, Power Windows, Tilt Steering\n", "price":"55", "avail":"true", "image_url":"https://www.cstatic-images.com/car-pictures/xl/usc80fos101a021001.png" },
    { "id":"123347", "make":"Subaru", "model":"Forester", "class":"SUV", "desc":"Radio, CD, AWD, Anti-Theft Device, Anti-Skid Device, Bucket Seats, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Power Driver Seat, Power Mirrors, Power Windows, Tilt Steering\n", "price":"35", "avail":"false", "image_url":"https://www.cstatic-images.com/car-pictures/xl/usc70sus041f021001.png" },
    { "id":"544321", "make":"Honda", "model":"Accord", "class":"Midsize", "desc":"CD, Anti-Theft Device, Anti-Skid Device, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Dual Mirrors, Power Brakes, Power Driver Seat, Power Mirrors, Power Steering, Power Windows, Tilt Steering\n", "price":"25", "avail":"true", "image_url":"https://www.cstatic-images.com/car-pictures/xl/usc80hoc011e021001_2.png" },
    { "id":"545321", "make":"Mercedes-Benz", "model":"AMG C 43", "class":"Premium", "desc":"Radio, CD, Anti-Theft Device, Anti-Skid Device, Bucket Seats, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Navigational System, Power Driver Seat, Power Mirrors, Power Windows, Tilt Steering", "price":"125", "avail":"true", "image_url":"https://www.cstatic-images.com/car-pictures/xl/usc70mbcbg5a021001.png" },
    { "id":"546321", "make":"Cadillac", "model":"ATS-V", "class":"Premium", "desc":"Radio, CD, Anti-Theft Device, Anti-Skid Device, Bucket Seats, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Navigational System, Power Mirrors, Power Windows, Tilt Steering, V8 Engine", "price":"95", "avail":"false", "image_url":"https://www.cstatic-images.com/car-pictures/xl/usc60cac222a021001.png" },
    { "id":"547321", "make":"Chevrolet", "model":"Cruze", "class":"Midsize", "desc":"CD, Anti-Theft Device, Anti-Skid Device, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Dual Mirrors, Power Brakes, Power Driver Seat, Power Mirrors, Power Steering, Power Windows, Tilt Steering", "price":"15", "avail":"true", "image_url":"https://www.cstatic-images.com/car-pictures/xl/usc70chc302b021001.png" },
    { "id":"123845", "make":"Toyota", "model":"Tundra", "class":"Offroad", "desc":"Radio, CD, Anti-Theft Device, Anti-Skid Device, Bucket Seats, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Navigational System, Power Driver Seat, Power Mirrors, Power Windows, Tilt Steering, V8 Engine", "price":"65", "avail":"true", "image_url":"https://www.cstatic-images.com/car-pictures/xl/usc80tot109e021001.png" },
    { "id":"123946", "make":"Buick", "model":"Encore", "class":"SUV", "desc":"Radio, CD, Anti-Theft Device, Anti-Skid Device, Bucket Seats, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Navigational System, Power Driver Seat, Power Mirrors, Power Windows, Tilt Steering", "price":"45", "avail":"true", "image_url":"https://www.cstatic-images.com/car-pictures/xl/usc70bus041a021001.png" },
    { "id":"123479", "make":"Audi", "model":"S3", "class":"Premium", "desc":"Radio, CD, Anti-Theft Device, Anti-Skid Device, Bucket Seats, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Navigational System, Power Driver Seat, Power Mirrors, Power Windows, Tilt Steering, V8 Engine", "price":"72", "avail":"false", "image_url":"https://www.cstatic-images.com/car-pictures/xl/usc70auc321a021001.png" },
    { "id":"543218", "make":"Toyota", "model":"Prius c", "class":"Midsize", "desc":"Hybrid, Radio, CD, Anti-Theft Device, Anti-Skid Device, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Power Driver Seat, Power Mirrors, Power Windows, Tilt Steering", "price":"45", "avail":"true", "image_url":"https://www.cstatic-images.com/car-pictures/xl/usc70toc251b021001.png" },
    { "id":"754321", "make":"Volkswagen", "model":"Volkswagen Tiguan", "class":"SUV", "desc":"Radio, CD, Anti-Theft Device, Anti-Skid Device, Bucket Seats, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Navigational System, Power Mirrors, Power Windows, Tilt Steering, V8 Engine", "price":"75", "avail":"true", "image_url":"https://www.cstatic-images.com/car-pictures/xl/usc80vws031b021001.png" },
    { "id":"654321", "make":"Bentley", "model":"Bentley Flying Spur", "class":"Premium", "desc":"Radio, CD, Anti-Theft Device, Anti-Skid Device, Bucket Seats, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Navigational System, Power Driver Seat, Power Mirrors, Power Windows, Tilt Steering", "price":"356", "avail":"false", "image_url":"https://www.cstatic-images.com/car-pictures/main/USC50BEC111B021001.png" },
    { "id":"254321", "make":"Toyota", "model":"Camry", "class":"Midsize", "desc":"Radio, CD, Anti-Theft Device, Anti-Skid Device, Central Locking, Cruise Control, Driver Airbag, Dual Airbags, Power Driver Seat, Power Mirrors, Power Windows, Tilt Steering", "price":"35", "avail":"true", "image_url":"https://www.cstatic-images.com/car-pictures/xl/usc80toc021b021001.png" }
]
}

var response = {
        statusCode: 200,
        body: JSON.stringify(inventory),
	"isBase64Encoded": false
    };
    console.log("response: " + JSON.stringify(response))
    callback(null, response);
};

