exports.Journal = function(title, author, entry) {
  this.title = title;
  this.author = author;
  this.entry = entry;
};

exports.Journal.prototype.entryLength = function() {
  return this.entry
      .split(" ")
      .length;
};
