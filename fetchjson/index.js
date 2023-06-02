"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
//url we are making a get request to
var url = 'https://jsonplaceholder.typicode.com/todos/1';
//get request where we receive a promise in return so we want to generate a response when we receive the request.
//basically gets the url the prints the data from the response from the url in the terminal.
axios_1.default.get(url).then(function (response) {
    console.log(response.data);
});
