// capitalize every word in a string making tittle out of it

function tittle_maker(str) {
  const arr_from_str = str.split(" ");
  const tittle = arr_from_str.map(word => word[0].toUpperCase() + word.slice(1));
  return tittle.join(" ");
}

tittle_maker("hello world"); //"Hello World"
