var moment = require('moment');
// var rando = require('./../js/Journal.js').Journal;
var OurModule = require('./../js/Journal.js');

$(document).ready(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var author = $('#author').val();
    var entry = $('#body').val();
    // var newJournalEntry = new rando (title, author, entry);
    var newJournalEntry = new OurModule.Journal (title, author, entry);

    $('#posts').append("<li>" + newJournalEntry.title + "</li>");
    $('#posts').append("<li>" + newJournalEntry.author + "</li>");
    $('#posts').append("<li>" + newJournalEntry.entry + "</li>");
    $('#posts').append("<li>Word Count: " + newJournalEntry.entryLength() + "</li>");
    $('#posts').append("<li>" + moment().format("dddd, MMMM Do YYYY, h:mm:ss a") + "</li>");
  });
});
