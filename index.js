
const { moo, neigh, baa, oink, cluck } = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};


const { bessie, dolly, babe, little } = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};


const { blackAndWhite, black, pink } = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};


const [red, orange, yellow, green, blue, indigo, violet] = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];


const [r, o, y, g, b, v] = ["red", "orange", "yellow", "green", "blue", "violet"];


const [indg] = ["indigo"];


const { muppetName, color, song, job, partner } = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};


const { song2, song4, nested: { job: nestedJob, partner: nestedPartner } } = {
  song2: "Moving Right Along",
  song4: "I Hope That Something Better Comes Along",
  nested: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};


console.log(moo, neigh, baa, oink, cluck);
console.log(bessie, dolly, babe, little);
console.log(blackAndWhite, black, pink);
console.log(red, orange, yellow, green, blue, indigo, violet);
console.log(r, o, y, g, b, v);
console.log(indg);
console.log(muppetName, color, song, job, partner);
console.log(song2, song4);
console.log(nestedJob, nestedPartner);
