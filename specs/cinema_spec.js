const assert = require('assert')
const Cinema = require('../cinema.js')
const Film = require('../film.js')

describe("Cinema", function(){

  let cinema;

  beforeEach(function(){
    film1 = new Film("Saving Private Ryan", "War", 1999, 120);
    film2 = new Film("Thin Red Line", "War", 2003, 113);
    film3 = new Film("Kill Bill", "Action", 1997, 90);
    films = [film1, film2, film3];
    cinema = new Cinema(films)

  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function(){
    const actual = cinema.titles();
    const expected = ["Saving Private Ryan", "Thin Red Line", "Kill Bill"];
    assert.deepStrictEqual(actual, expected)
  });


  it('should be able to find a film by title', function(){
    const actual = cinema.findTitle("Saving Private Ryan");
    assert.strictEqual(actual, film1)
  });


  it('should be able to filter films by genre', function(){
    const actual = cinema.sortByGenre("War");
    const expected = [film1, film2];
    assert.deepStrictEqual(actual, expected);
  });


  it('should be able to check whether there are some films from a particular year', function(){
    const actual = cinema.checkYear(1999);
    assert.strictEqual(actual, true);
  });


  it('should be able to check whether there are no films from a particular year', function(){
    const actual = cinema.checkYear(2020);
    assert.strictEqual(actual, false);
  });


  it('should be able to check whether all films are over a particular length', function(){
    const actual = cinema.checkRunTimeIsOver(60)
    assert.strictEqual(actual, true)
  });


  it('should be able to calculate total running time of all films', function(){
    const actual = cinema.checkTotalRunTime();
    assert.strictEqual(actual, 323)
  });

  it('should be able to filter films by year', function(){
    const actual = cinema.filmsByProperty('year', 1999);
    assert.deepStrictEqual(actual, [film1]);
  });












})
