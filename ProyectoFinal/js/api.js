let weatherRequest = new XMLHttpRequest ();
// URL http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
// APIKEY: 68cb42893ce125f4f25e799f290d6598
// Identificación de Preston: 5604473
let apiURLstring ='https://api.openweathermap.org/data/2.5/weather?id=3919968&units=Metric&APPID=68cb42893ce125f4f25e799f290d6598'
weatherRequest.open ('GET', apiURLstring, true);
weatherRequest.send ();
/* Para esperar a que se cargue el objeto de solicitud, use el método onload para
encapsular
el analizador JSON y las declaraciones de salida en una función genérica O usan un
addEventListener usando el parámetro load. */
 weatherRequest.onload = function () {
 let weatherData = JSON.parse (weatherRequest.responseText);
 console.log (weatherData);
 document.getElementById ('cc-temp'). innerHTML = weatherData.main.temp;

 let icon ="http://openweathermap.org/img/wn/"+weatherData.weather[font.icon+".png"]
 let desc = weatherData.weather [0] .description;
 document.getElementById ('cc-img'). setAttribute ('src', icono);
 document.getElementById ('cc-img'). setAttribute ('alt', desc);
 }