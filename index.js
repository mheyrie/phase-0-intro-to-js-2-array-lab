// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
 
function  destructivelyAppendCat(cat) {
    cats.push(cat);
    return cats;
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function  destructivelyPrependCat(cat) {
    cats.unshift(cat);
    return cats;
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function  destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function  destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function  appendCat(cat) {
    let catty = [...cats, cat];
    return catty;
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function  prependCat(cat) {
    let catty = [cat, ...cats];
    return catty;
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function   removeLastCat() {
    let catt = cats.slice(0, cats.length -1);
    return catt;
  }
  
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function  removeFirstCat() {
     let caty = cats.slice(1);
     return caty;
  }