exports.Journal = function(title, author, entry) {
  this.title = title;
  this.author = author;
  this.entry = entry;
  // this.entryLength = function() {
  //   return this.entry
  //       .split(" ")
  //       .length;
  // };
};

exports.Journal.prototype.entryLength = function() {
  return this.entry
      .split(" ")
      .length;
};
