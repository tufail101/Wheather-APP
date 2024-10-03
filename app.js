

const cityInput = document.getElementById('city');
const btn = document.getElementById('btn');
const city_name= document.getElementById('city-name');
const weather_description= document.getElementById('weather-description');
const temperature= document.getElementById('temperature');
const humidity= document.getElementById('humidity');
const wind= document.getElementById('wind');
const info=document.getElementById('weather-info');
const error=document.getElementsByClassName("error-card")[0];
btn.addEventListener("click", async () => {
  
  
  
  
  
  let city=cityInput.value;
let api_key=`55bd0b8d0ec1c9b1571cf63184e0720b`;
  let base_url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  let response= await fetch(base_url);
  let data=await response.json()
  
  if(data.cod==='404'|| data.cod==='400'){
    error.style.display="block";
    
    info.style.display="none";
    
    return;
  }
  error.style.display="none";
  info.style.display="block";
  let tem=data.main.temp;
  let temp_in_cel=tem-273.15;
  
  
  //temperature 
  let temp_org=Math.round(temp_in_cel);
  
  
  
  //discription 
  let description=data.weather[0].description;
  
  //humidity 
  let hum=data.main.humidity;
  
 
 
 
 //wind
  
  let win=data.wind.speed;
  
  
  
  
  //dom
  
  
  city_name.innerHTML=`${city}`;
  temperature.innerHTML=`${temp_org} °C`;
  humidity.innerHTML=`Humidity: ${hum}%`;
  weather_description.innerHTML=`${description}`;
  wind.innerHTML=`Wind: ${win}km/h`;
  
})
 

  
