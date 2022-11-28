// business Logic file
x
export class WeatherService {
    static getWeather(city){
        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
            
            request.onload = function(){
                // the new branch is saying: if the status code(or status) of my Api call = 200, then my Promise has been resolved but if it isn't then my promise has been rejected
                
                if(this.status === 200){
                    resolve(request.response);
                }
                else{
                    reject(request.response);
                }
            }

            request.open("GET", url, true);
            request.send();

        });
    }
}


export class CountryWeatherService {
    static getCountryWeather(country){
        return new Promise(function(resolve, reject){
            let secondRequest = new XMLHttpRequest();
            const countryUrl = `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${process.env.API_KEY}`;
            
            secondRequest.onload = function(){
                // the new branch is saying: if the status code(or status) of my Api call = 200, then my Promise has been resolved but if it isn't then my promise has been rejected
                
                if(this.status === 200){
                    resolve(secondRequest.response);
                }
                else{
                    reject(secondRequest.response);
                }
            }

            secondRequest.open("GET", countryUrl, true);
            secondRequest.send();

        });
    }
}