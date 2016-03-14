// var moment = require('moment');
var journal = require('./../js/Journal.js').Journal;

$(document).ready(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var author = $('#author').val();
    var entry = $('#body').val();
    var newJournalEntry = new journal(title, author, entry);

    $('#posts').append("<li>" + newJournalEntry.title + "</li>");
    $('#posts').append("<li>" + newJournalEntry.author + "</li>");
    $('#posts').append("<li>" + newJournalEntry.entry + "</li>");

  });
});
