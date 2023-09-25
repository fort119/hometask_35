const weatherBlock = document.querySelector(".weather");

async function loadWeather(e) {
  const server = "http://api.openweathermap.org/data/2.5/weather?q=ODESSA&units=metric&APPID=5d066958a60d315387d9492393935c19";
  const response = await fetch(server);
  const responseResult = await response.json();
  if (response.ok) {
    getWeather(responseResult);
  }
}

function getWeather(data) {
  const cityName = data.name;
  const realTemp = data.main.temp;
  const feelsLikeTemp = data.main.feels_like;
  const pressure = data.main.pressure;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const windDirection = data.wind.deg;
  const weatherIcon = data.weather[0].icon;
  const descr = data.weather[0].description;


  const weatherWidget = `
  <section class="vh-100" style="background-color: #4B515D;">
      <div class="container py-5 h-100">

        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-8 col-lg-6 col-xl-4">

            <div class="card" style="color: #4B515D; border-radius: 35px;">
              <div class="card-body p-4">

                <div class="d-flex">
                  <h6 class="flex-grow-1">${cityName}</h6>
                  <h6>${descr}</h6>
                </div>

                <div class="d-flex flex-column text-center mt-5 mb-4">
                  <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${realTemp}°C </h6>
                  <span class="small" style="color: #868B94">feels like: ${feelsLikeTemp}°C</span>
                </div>

                <div class="d-flex align-items-center">
                  <div class="flex-grow-1" style="font-size: 1rem;">
                    <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">wind speed: ${windSpeed} km/h
                      </span></div>
                      <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">wind dir: ${windDirection} deg
                      </span></div>
                    <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1">air humidity: ${humidity}%</span>
                    </div>
                    <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1">pressure: ${(pressure / 1.33).toFixed()} mm</span>
                    </div>
                  </div>
                  <div>
                    <img src="http://openweathermap.org/img/w/${weatherIcon}.png"
                      width="100px">
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
  </section>`
  weatherBlock.innerHTML = weatherWidget;
}
if (weatherBlock) {
  loadWeather();
}

