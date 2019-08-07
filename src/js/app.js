import '../styles/style.scss';

const people = require('./people.js');
const $ = require('jquery');

people.forEach(person => {
    $('body > .name-list').append(`<h1>${person.name}</h1>`);
});
