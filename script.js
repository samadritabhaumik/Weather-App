const options={
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b45e9623fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));