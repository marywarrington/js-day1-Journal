var journalPost = require('./../js/journal.js').journalPost;

$(document).ready(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var author = $('#author').val();
    var body = $('#body').val();

    $('#posts').append("<li>" + title + "</li>");
    $('#posts').append("<li>" + author + "</li>");
    $('#posts').append("<li>" + body + "</li>");

  });
});
