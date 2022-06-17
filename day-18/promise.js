fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.length);
    console.log(data);
    console.log(data[0].languages)
    createcard(data);
  });

function createcard(data) {
  for (let i = 0; i < 5; i++) {
    let appid = `33595ee7c5852f69ba0dbb8b0e329dd8`;
    let flag = data[i].flags.svg;
    let name = data[i].name.official;
    let capital = data[i].capital;
    let region = data[i].region;
    let languanges=Object.values(data[i].languages)
    console.log(languanges +" "+i)
    let latitude = data[i].latlng[0];
    let longitude = data[i].latlng[1];
    let countryCode = data[i].region;
    const container = document.getElementById("contt");
    const card = document.createElement("div");
    card.setAttribute(`class`, `card border-sucess`);
    card.style.maxWidth = "18rem";
    card.innerHTML = `
        <div class="card-header bg-transparent border-success">
              <h5 class="card-title">${data[i].name.official}</h5>
            </div>
            <div class="card-body text-success">
              <img src="" alt="flag" /> 
              <ul class="list-group list-group-flush">
                <li class="list-group-item">${capital}</li>
                <li class="list-group-item">${region}</li>
                <li class="list-group-item">${languanges} </li>
                <li class="list-group-item">${latitude}</li>
                <li class="list-group-item">${longitude}</li>
                <li class="list-group-item">${countryCode}</li>
                <li class="list-group-item">
                  <button class="btn-btn-primary" onClick= "showWeather()">
                    <a href="https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=33595ee7c5852f69ba0dbb8b0e329dd8">click here for weather</a>
                  </button>
                </li>
              </ul>
          </div>
      </div>`;
    container.appendChild(card);
  }
}

//btn.addEventListener(click,)