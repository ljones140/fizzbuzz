describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("is divisable by three", function() {
    expect(game.isDivisableByThree(3)).toEqual(true);
  });

  it("is not divisable by three", function() {
    expect(game.isDivisableByThree(1)).toEqual(false);
  });

  it("return 1 for 1", function() {
    expect(game.fizzBuzz(1)).toEqual(1);
  });

  it("return fizz for 3", function() {
    expect(game.fizzBuzz(3)).toEqual('Fizz');
  });

  it("return buzz for 5", function() {
    expect(game.fizzBuzz(5)).toEqual('Buzz');
  });

  it("returns fizzbuzz for 15", function() {
    expect(game.fizzBuzz(15)).toEqual('FizzBuzz')
  });

});
