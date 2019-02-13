const assert = require('assert');
const Film = require('../film.js');

describe('Film', function () {

  let film;

  beforeEach(function () {
    film = new Film("Saving Private Ryan", "War", 1999, 120);
  });

  it('should have a title', function () {
    const actual = film.title;
    assert.strictEqual(actual, "Saving Private Ryan");
  });

  it('should have a genre', function () {
    const actual = film.genre;
    assert.strictEqual(actual, 'War');
  });

  it('should have a year', function () {
    const actual = film.year;
    assert.strictEqual(actual, 1999);
  });

  it('should have a length', function () {
    const actual = film.runTime;
    assert.strictEqual(actual, 120);
  });

});
