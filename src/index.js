// the code for the API CALL 

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
    $('#weatherLocation').click(function () {
        const city = $('#location').val();
        $('#location').val("");
        
        let request = new XMLHttpRequest();
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`

        // Note that it's necessary to use a template literal so the key is expressed as a string within our API call. (Remember, it's not a string in our .env file.) For that reason, it's added to our code like this: ${process.env.API_KEY}.

        // function that listens for changes to the XMLHttpRequest
        request.onreadystatechange = function () {
            // having a code that logs to the console any ready state changes 
            console.log(this.readyState);
            // this console code worked and I was able to see 1 2 3 4.... and the meaning is thus: 1: Opened, 2: Headers Received, 3: Loading, 4: Done 
            /*Note: If you try this in the console yourself, ESLint will freak out with a no-unused-vars error. This is because the getElements() function we define later in the code is no longer used. You'll need to temporarily comment it out to soothe ESLint. Also, make sure to return the code to its original state after you're done. */
            if (this.readyState === 4 && this.status === 200) {
                // our branch says: We don't want to do anything until the readyState is 4 because the data transfer won't be complete yet. This is classic async at work.
                // and this.status === 200, once both conditions are fulfilled then we want to do something with the data
                const response = JSON.parse(this.responseText);
                getElements(response);
            }

            // in a lane man language our branch condition is saying: this conditional states that the API call must be successful and the data transfer must be complete before our code processes that data.
        };

        request.open("GET", url, true);
        request.send();

        // the first request.open() picked my city and state while the 2nd is for country only

        function getElements(response) {
            // for my fahrenheit temperature let me first store the value of the temperature XMLHttp object will give me

            let myTempValue = 1.8 * (response.main.temp - 273) + 32;
            // let myTempValue = Math.trunc(1.8 * (response.main.temp - 273) + 32); -- I didn't trunc or floor the values because I want my value to be concised for my users
            console.log(myTempValue);
            // In this code, getElements(response) won't be called until the conditional becomes true. In other words, by using a callback, we ensure the function doesn't run until after we get a response from the server.
            $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
            $('.showTemp').text(`The temperature in Kelvin is ${response.main.temp}k.`);
            // since the value the XmlHttp object will give me for temperature is in kelvin, I now had to -273k from it to get my celsius temperature
            $('.showTempCelsius').text(`The temperature in degree Celsius is ${response.main.temp - 273}c.`);
            // for the fahrenheit temperature now I used the celsius to fahrenheit formula which is: 9/5(c) + 32
            $(".showTempFahrenheit").text(`The temperature in Fahrenheit is ${myTempValue}f`)
            
            // now my fahrenheit temperature is working and I can now add a little bit of extra by flooring or truncing the values with the Math library to make my values more exact and concise
        
            // for the country temperatures: remember the 2nd form only takes in a parameter which is: country       
        
        }
    });

    $('#countryWeather').click(function () {
       
        
        // getting my country value
        const country = $('#country').val();
        $('#country').val("");


        let secondrequest = new XMLHttpRequest();
        
        // for the country API
        const urlcountry = `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${process.env.API_KEY}`
        // Note that it's necessary to use a template literal so the key is expressed as a string within our API call. (Remember, it's not a string in our .env file.) For that reason, it's added to our code like this: ${process.env.API_KEY}.

        // function that listens for changes to the XMLHttpRequest
        secondrequest.onreadystatechange = function () {
            // having a code that logs to the console any ready state changes 
            console.log(this.readyState);
            // this console code worked and I was able to see 1 2 3 4.... and the meaning is thus: 1: Opened, 2: Headers Received, 3: Loading, 4: Done 
            /*Note: If you try this in the console yourself, ESLint will freak out with a no-unused-vars error. This is because the getElements() function we define later in the code is no longer used. You'll need to temporarily comment it out to soothe ESLint. Also, make sure to return the code to its original state after you're done. */
            if (this.readyState === 4 && this.status === 200) {
                // our branch says: We don't want to do anything until the readyState is 4 because the data transfer won't be complete yet. This is classic async at work.
                // and this.status === 200, once both conditions are fulfilled then we want to do something with the data
                const secondresponse = JSON.parse(this.responseText);
                getCountryElements(secondresponse);
            }

            // in a lane man language our branch condition is saying: this conditional states that the API call must be successful and the data transfer must be complete before our code processes that data.
        };
        // the first request.open() picked my city and state while the 2nd is for country only

        secondrequest.open("GET", urlcountry, true);
        secondrequest.send();

        function getCountryElements(secondresponse) {
            // for my fahrenheit temperature let me first store the value of the temperature XMLHttp object will give me

            let myTempValue = 1.8 * (secondresponse.main.temp - 273) + 32;
            // let myTempValue = Math.trunc(1.8 * (response.main.temp - 273) + 32); -- I didn't trunc or floor the values because I want my value to be concised for my users
            console.log(myTempValue);
            
            
            // for the country temperatures: remember the 2nd form only takes in a parameter which is: country

            $('.showHumidityCountry').text(`The humidity in ${country} is ${secondresponse.main.humidity}%`);
            $('.showTempCountry').text(`The temperature in Kelvin is ${secondresponse.main.temp}k.`);
            $('.showTempCelsiusCountry').text(`The temperature in degree Celsius is ${secondresponse.main.temp - 273}c.`);
            $(".showTempFahrenheitCountry").text(`The temperature in Fahrenheit is ${myTempValue}f`)
            
        
        
        }
    });


});