const API_KEY = "aa9520f1ffa472bc8bfcd0d458ffa35d"
const locationDisplay = document.querySelector(".location")
const tempDisplay = document.querySelector(".temperature span")
const weatherSelect = document.querySelector("#weather-select")

// axios.get("https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=aa9520f1ffa472bc8bfcd0d458ffa35d")
// .then(function (response) {
  // handle success
//   console.log(response, 'success');
// })

// const getWeather = (city) => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
//   axios.get(url)
//   .then(function (response) {
//     console.log(response, 'success');
//   })
//   .catch(function (err) {
//     console.log(err, 'err');
//   })
// }

weatherSelect.addEventListener("change", (e) => {
  getWeather(e.target.value)
})


const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  const response = await axios.get(url);
  locationDisplay.innerText = response.data.name;
  tempDisplay.innerText = transferTemp(response.data.main.temp)
}

const transferTemp = (temp) => {
  return (temp - 273.15).toFixed(1);
}


