require('../css/style.css');

const people = require('./people.js');
const $ = require('jquery');

people.forEach(person => {
    $('body').append(`<h1>${person.name}</h1>`);
});
