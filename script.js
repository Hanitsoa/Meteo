const elementInput = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {

    window.fetch(`https://api.openweathermap.org/data/2.5/weather?q=${elementInput.value}&lang=fr&units=metric&appid=1adf2c4d323f458c060c499f015e352a`)
        .then(res => res.json())
        .then(resJson => { console.log(resJson);
            const icon = `https://openweathermap.org/img/wn/${resJson.weather[0]["icon"]}@2x.png`;

            let ville = ` ${resJson.name}`
            let selectVille = document.querySelector('.ville');
            selectVille.innerHTML = "<h2>" + ville + "</h2>";
            
            let photo = document.querySelector('.photo');
            let image = document.createElement('img');
            image.src = `${icon}`;
            photo.innerHTML = `<img class="city-icon" src=${icon} alt=${resJson.weather[0]["main"]} />`;

            let description = `${resJson.weather[0]["description"]} - [ ${resJson.main.temp_min}°C - ${resJson.main.temp_max}°C ]`;
            let selectDescription = document.querySelector('.description');
            selectDescription.innerHTML = "<h4>" +description +"</h4>";
            
        });
})




