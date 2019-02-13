const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titles = function(){
  return this.films.map((film) => {
    return film.title;
  });
};

Cinema.prototype.findTitle = function (title) {
  return this.films.find((film) => {
    return film.title === title
  })
};

Cinema.prototype.sortByGenre = function (genre) {
  return this.films.filter((film) => {
    return film.genre === genre
  })
};

Cinema.prototype.filterByYear = function (year) {
  return this.films.filter((film) => {
    return film.year === year
  })
};

Cinema.prototype.checkYear = function (year) {
  return this.films.some((film) => {
    return film.year === year
  })
};

Cinema.prototype.checkRunTimeIsOver = function (time) {
  return this.films.every((film) => {
    return film.runTime >= time
  })
};

Cinema.prototype.checkTotalRunTime = function () {
  return this.films.reduce((totalTime, film) => totalTime + film.runTime, 0)
};

Cinema.prototype.filmsByProperty = function (property, value) {
  return this.films.filter((film) => {
    return film[property] === value;
  })
};

module.exports = Cinema;
