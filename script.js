function makeBuffer() {
    var text = '';

    function buffer(piece) {

      if ( arguments.length == 0 ) {
        return text;
      }
      text += piece;

    };

    buffer.clear = function() {
      text = '\" \"';
    }

    return buffer;
  };

var buffer = makeBuffer();

console.log(buffer('Используйте'));
console.log(buffer(', пожалуйста'));
console.log(buffer(', замыкания'));
console.log(buffer('!'));

console.log(buffer());

buffer.clear();

console.log(buffer());
