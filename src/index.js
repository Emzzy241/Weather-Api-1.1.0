// UserInterface Logic file



// Updating code, which was written with callbacks in version 1.0.0 of application to include promises, but first let's analogize what a promise is:
// Let's use one more analogy to explain the process. Imagine you're waiting to renew your driver's license at the DMV. When you go in, you get a piece of paper with a number on it. You wait until your number is called and then you go to the counter to renew your license.

// That piece of paper is similar to a promise. It represents an appointment you'll have in the future, but that appointment doesn't exist yet. While you're waiting for your number to be called, the promise is pending. The promise will either be fulfilled (driver's license renewed...yay!) or rejected (better study for the driving test more...)

// Once the promise is either fulfilled or rejected, it is complete and becomes immutable. An immutable value can't be changed. A promise is a one-off situation and then we can't use it again. Returning to the analogy of getting a license, once that ticket is resolved, it can't be used again. If you want to do something else at the DMV, you'll have to get a new ticket (which represents a new promise).

// summary of promises

// we  can wrap our async code in a promise.
// Next, we can tell our function when it should resolve or reject - giving us fine-grained control over how JavaScript should handle our async code.
// Finally, we can use Promise.prototype.then() to run code once the async operation is complete - no need to keep tabs on the promise. JavaScript will do that for us.
// Promise.prototype.then() takes up to two functions as arguments - the first (required) function determines what happens if a promise is fulfilled while the second (optional) function determines what happens if the promise is rejected.
// We can even chain promises together because Promise.prototype.then() itself returns a promise. We'll learn more about that later in this section, though it's not required to do any chaining for the independent project.



// no more callbacks for making Api calls, time to use Promises( a new Tool that was introduced in ES6 released in 2015)... 
// little Fun fact about ES6( it is also called ES2015) as it was made in 2015, it is not called ES6 because its made in 2006 :)
// the one disadvantage with promises though is that they eat up much lines of code

// the UserInterface Logic file
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// importing the WeatherService and CountryWeatherService class that we need in the UI logic file

import { WeatherService,CountryWeatherService } from "./weather-service.js";

// importing the APp Logo
import jsBadgeImage from "./assets/images/js-Badge.svg";

// separation of logic code 


$(document).ready(() => {

    // working with the image impoerted
    let appImg = $("#myAPPIMg");
    appImg.attr("href", jsBadgeImage);
    
    // a function for clearing out the form fields and other things from the DOM(Document Object Module) for city,state
    function clearFields() {
        $("#location").val("");
        $(".showErrors").text("");
        $(".showHumidity").text("");
        $(".showTemp").text("");
        $(".showTempCelsius").text("");
        $(".showTempFahrenheit").text("");
    }
    
    // a function for clearing out the form fields and other things from the DOM(Document Object Module) for country
    function clearCountryFields() {
        $("#country").val("");
        $(".showErrorsCountry").text("");
        $(".showHumidityCountry").text("");
        $(".showTempCountry").text("");
        $(".showTempCelsiusCountry").text("");
        $(".showTempFahrenheitCountry").text("");
    }

    
    $('#weatherLocation').click(() => {
        let city = $('#location').val();
        // running the clearFields() function to clear out all our fields(both the form fields and the other fields for revealingthe answers)
        clearFields();

        let promise = WeatherService.getWeather(city);

        // finally running the .then() method on that same Promise because since the variable(promise) also holds a promise, we can call a .then() prototype on it

        promise.then((myResponse) => {
            const body = JSON.parse(myResponse);

            // getting the fahrenheit temperature value
            let myTempValue = 1.8 * (body.main.temp - 273) + 32;
            // let myTempValue = Math.trunc(1.8 * (response.main.temp - 273) + 32); -- I didn't trunc or floor the values because I want my value to be concised for my users
            console.log(myTempValue);

            $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
            $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp}k.`);
            $('.showTempCelsius').text(`The temperature in degree Celsius is ${body.main.temp - 273}c.`);
            $(".showTempFahrenheit").text(`The temperature in Fahrenheit is ${myTempValue}f`);
            // $('.showErrors').text("");
        }, function (error) {
            $('.showErrors').text(`There was an error processing your request: ${error}`);

        });
    });

    $("#countryWeather").click(function () {
        let country = $("#country").val();

        clearCountryFields();

        // making use of another promise for Countries

         let countryPromise = CountryWeatherService.getCountryWeather(country);

         countryPromise.then((myCountryResponse) => {
            const countryBody = JSON.parse(myCountryResponse);

            let myCountryTempValue = 1.8 * (countryBody.main.temp - 273) + 32;
            // let myTempValue = Math.trunc(1.8 * (response.main.temp - 273) + 32); -- I didn't trunc or floor the values because I want my value to be concised for my users
            console.log(myCountryTempValue);

            $('.showHumidityCountry').text(`The humidity in ${country} is ${countryBody.main.humidity}%`);
            $('.showTempCountry').text(`The temperature in Kelvins is ${countryBody.main.temp}k.`);
            $('.showTempCelsiusCountry').text(`The temperature in degree Celsius is ${countryBody.main.temp - 273}c.`);
            $(".showTempFahrenheitCountry").text(`The temperature in Fahrenheit is ${myCountryTempValue}f`);
        }, function (countryEror) {
            $('.showErrorsCountry').text(`There was an error processing your request: ${countryEror}`);



        });
    });
});





// code for when we were using promise but there was only one file: and there was no separation of logic
/*
$(document).ready(function () {

    $('#weatherLocation').click(function () {
        let city = $('#location').val();
        $('#location').val("");

        // New code begins here.

        let promise = new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
            request.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(request.response);
                }
            }
            request.open("GET", url, true);
            request.send();
        });

        promise.then(function (myResponse) {
            const body = JSON.parse(myResponse);

            // getting the fahrenheit temperature value
            let myTempValue = 1.8 * (body.main.temp - 273) + 32;
            // let myTempValue = Math.trunc(1.8 * (response.main.temp - 273) + 32); -- I didn't trunc or floor the values because I want my value to be concised for my users
            console.log(myTempValue);

            $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
            $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp}k.`);
            $('.showTempCelsius').text(`The temperature in degree Celsius is ${body.main.temp - 273}c.`);
            $(".showTempFahrenheit").text(`The temperature in Fahrenheit is ${myTempValue}f`);
            $('.showErrors').text("");
        }, function (error) {
            $('.showErrors').text(`There was an error processing your request: ${error}`);
            $('.showHumidity').text("");
            $('.showTemp').text("");
        });

    });


    $('#countryWeather').click(function () {


        // getting my country value
        const country = $('#country').val();
        $('#country').val("");

        let secondPromise = new Promise(function (resolve, reject) {
            let countryRequest = new XMLHttpRequest();
            const countryUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
            countryRequest.onload = function () {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(request.response);
                }
            }
            countryRequest.open("GET", countryUrl, true);
            countryRequest.send();
        });

        secondPromise.then(function (myCountryResponse) {
            const countryBody = JSON.parse(myCountryResponse);

            // getting the fahrenheit temperature value
            let myTempValue = 1.8 * (countryBody.main.temp - 273) + 32;
            // let myTempValue = Math.trunc(1.8 * (response.main.temp - 273) + 32); -- I didn't trunc or floor the values because I want my value to be concised for my users

            console.log(myTempValue);

            $('.showHumidity').text(`The humidity in ${city} is ${countryBody.main.humidity}%`);
            $('.showTemp').text(`The temperature in Kelvins is ${countryBody.main.temp}k.`);
            $('.showTempCelsius').text(`The temperature in degree Celsius is ${countryBody.main.temp - 273}c.`);
            $(".showTempFahrenheit").text(`The temperature in Fahrenheit is ${myTempValue}f`);
            $('.showErrors').text("");
        }, function (countryError) {
            $('.showErrors').text(`There was an error processing your request: ${countryError}`);
            $('.showHumidity').text("");
            $('.showTemp').text("");
        });


    });

});
*/


// Key things to not in the new functionality we used for making our api calls: Promises
// note that we use an event handler called onload with our XMLHttpRequest object instead of the property onreadystatechange. This event handler is yet another very convenient aspect of XMLHttpRequest objects. While we can continue to use onreadystatechange as well, using onload is a little bit more concise because we no longer have to specify a readyState of 4. Also, it will only be triggered once (when the response has loaded), and not every time the readyState changes. Why didn't we learn about onload right away when we first started working with XMLHttpRequest objects? Well, it's important to know about the different states of an XMLHttpRequest object. Now that we do, we can just use onload if we know we are just waiting for the request to load only and not for the readyState to change to 4 like we did b4.


// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     $('#location').val("");

// // New code begins here.

//     let promise = new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//         } else {
//           reject(request.response);
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });

//     promise.then(function(response) {
//       const body = JSON.parse(response);
//       $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//       $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
//       $('.showErrors').text("");
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error}`);
//       $('.showHumidity').text("");
//       $('.showTemp').text("");
//     });
//   });
// });
