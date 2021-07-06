const Dinosaur = require("./models/dinosaur.js");
const Park = require("./models/park.js");

const dinosaur = new Dinosaur("t-rex", "carnivore", 50);
const dinosaur2 = new Dinosaur("velociraptor", "carnivore", 40);
park = new Park("jurassic world", 25, [dinosaur, dinosaur2]);

console.log(park.mostPopularDinosaur());
