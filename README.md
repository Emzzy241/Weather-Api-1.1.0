# Get Weather conditions near you
#### made by Mojiboye Emmanuel

#### An application where you can input a place,city or Country and then get the weather conditions of that place

## Technologies Used
* Git
* Webpack
* JavaScript
* Html
* CSS
* Api with JavaScript
* Environmental Variables(.env file)
* jQuery
* JSON
* Openweathermap.org API
* Promise
* Async and Await functions
* Fetch

## Description
_In this application, you experience how powerful the term API is and you also get to explore one of the best sites to get weather condition which is: (https://openweathermap.org/api_keys). I know you would definitely want to know what APi key I used, below which is the setup/Installation is where you can get all those_

## Setup/Installation
* First clone the project on your System(git clone _REPOSITORY-NAME_)
* Run npm install in the Terminal(e.g the git bash Terminal). with this, all of the dependencies of the application gets installed
* Then before running an "npm run start" which will build and start the application on a dev server here are a few things you will be needing for the application and those few things are:
* 1. An Environmental variable file: just create a file named .env(note: this is the place where you will be storing sensitive information like API keys and the likes)
* 2. Go to the website(https://home.openweathermap.org/api_keys) or just type in openweathermap.org
* 3. Create a developer account which will make you able to generate API keys you will be needing for this application
* 4. Generate an API key with a name of your choice, now copy that api key(hint: an API key characters ranges from 20-25 characters) and then go to the .env file you created and in it create a variable(hint: variables created in a .env file are all capitalized and have an underscore_ separating each word) you can name your variable anything and then store your api key to be equal to that variable you created
* 5. Having done that, inside the index.js javascript file check to see a variable where I stored my openweathermap link in(endpoint) and in the "process.env.API_KEY" change it to a "process.env.API_KEY.THE_VARIABLE_NAME_YOU_STORED_YOUR_API_KEY_IN"
* 6. Ensure you take part in the no5 otherwise you'll get a "401: invalid api key" error. If you do get lost on the way, you can contact me below with the contact details I supplied below


## Detected Bugs/ Issues
* _No detected bugs_
* _The one bug you will definitely encounter is if you fail to follow any of the Setup/Installation Information I gave you_
* _Note: as at the launch of this Application there are no bugs but this is not the finished product as I will be adding more features later on. If anyone comes in contact with a bug, be sure to hit me up on social media or email me @emzzyoluwole@gmail.com. WATCH OUT FOR VERSION 1.1 WHICH IS COMING SOON. Also in version 1.1, I would be making use of some things called promise, .then() and fetch, and even a try....catch block just to make application more fun and readable for users_
* _This note was added for version 1.0.0, this is the version 1.1.0 where the technologies promise, fetch, async and await functions were all used._
* _P.S: two javaScript logic files where used here_

## WebLink
https://emzzy241.github.io/Weather-Api/

## License
Licensed under the GNU General Public License

## Contact Info
* _You can contact me via email @ emzzyoluwole@gmail.com_
* _I'm on Instagram @Emmanuel.9944_
* _I'm on Twitter @Dynasty or @Iam_dynasty










<!-- when writing me Emmanuel make sure you read this:

EMMANUEL MAKE SURE YOU MAKE A GREAT README FILE 

You should always be careful storing any sensitive information in your application. Even if it's just the key for an API that's free for public use, you should still be in the habit of keeping this information private.

Generally, we don't need to worry too much about security with the public APIs that we'll be using, but it's important to be aware of the security issues around API keys. Make sure you store all keys in a local .env file that's never pushed to Github. dotenv-webpack should also be a regular tool in your toolbox whenever you're using sensitive variables in webpack projects. And once again, when you do push projects to GitHub that require API keys, make sure to include instructions in the README so that other users can clone your project and use their own API keys to see what you've built. That means including all steps for getting a key - from the link to sign up for an account to any steps to getting an API key to using a personal key with a .env file. Adding both a .env file with properly stored API variables as well as instructions for adding an API key is a requirement for this section's independent project. -->