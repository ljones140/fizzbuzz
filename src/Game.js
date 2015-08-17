function Game() {
}
Game.prototype.isDivisableByThree = function(number) {
  return number % 3 === 0 ? true : false;
};

Game.prototype.fizzBuzz = function(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  }
  if (number % 3 === 0) {
    return 'Fizz';
  }
  if (number % 5 === 0) {
    return 'Buzz'
  }
    return number;
};