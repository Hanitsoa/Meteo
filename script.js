const elementInput = document.querySelector('input');
const btn = document.querySelector('button');
let weather = document.querySelector('.weather-icon');

btn.addEventListener('click', () => {

    window.fetch(`https://api.openweathermap.org/data/2.5/weather?q=${elementInput.value}&lang=fr&units=metric&appid=1adf2c4d323f458c060c499f015e352a`)
        .then(res => res.json())
        .then(resJson => {
            const icon = `https://openweathermap.org/img/wn/${resJson.weather[0]["icon"]}@2x.png`;
            const div = document.createElement("div");
            div.classList.add("city");
            const markup = `
                    <figure>
                        <img class="city-icon" src=${icon} alt=${resJson.weather[0]["main"]}>
                        <figcaption>${resJson.weather[0]["description"]}</figcaption>
                        <p>${resJson.main.temp} °C</p>
                    </figure>
                `;
            div.innerHTML = markup;
            weather.appendChild(div);
        });
})




