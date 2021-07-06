const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

describe("Park", function () {
  let dinosaur;
  let dinosaur2;
  let park;
  let park2;

  beforeEach(function () {
    dinosaur = new Dinosaur("t-rex", "carnivore", 50);
    dinosaur2 = new Dinosaur("velociraptor", "carnivore", 40);
    park = new Park("jurassic world", 25, [dinosaur]);
    park2 = new Park("jurassic land", 25, [dinosaur, dinosaur2]);
  });

  it("should have a name", () => {
    assert.strictEqual(park.name, "jurassic world");
  });

  it("should have a ticket price", () => {
    assert.strictEqual(park.ticketPrice, 25);
  });

  it("should have a collection of dinosaurs", () => {
    assert.deepStrictEqual(park.dinosaurs, [dinosaur]);
  });

  it("should be able to add a dinosaur to its collection", () => {
    park.addDinosaur(dinosaur2);
    assert.deepStrictEqual(park.dinosaurs, [dinosaur, dinosaur2]);
  });

  it("should be able to remove a dinosaur from its collection", () => {
    park2.removeDinosaur(dinosaur);
    assert.deepStrictEqual(park2.dinosaurs, [dinosaur2]);
    park2.removeDinosaur(dinosaur2);
    assert.strictEqual(park2.dinosaurs.length, 0);
  });

  it("should be able to find the dinosaur that attracts the most visitors", () => {
    assert.strictEqual(park2.mostPopularDinosaur(), dinosaur);
  });

  it("should be able to find all dinosaurs of a particular species", () => {
    assert.deepStrictEqual(park2.findDinosaursBySpecies("t-rex"), [dinosaur]);
  });

  it("should be able to calculate the total number of visitors per day", () => {
    assert.strictEqual(park2.totalVisitorsPerDay(), 90);
  });

  it("should be able to calculate the total number of visitors per year", () => {
    assert.strictEqual(park2.totalVisitorsPerYear(), 32850);
  });

  it("should be able to calculate total revenue for one year", () => {
    assert.strictEqual(park2.totalRevenuePerYear(), 821250);
  });
  it("should remove all dinosaurs of a particular species", () => {
    park2.addDinosaur(dinosaur);
    park2.removeBySpecies("t-rex");
    assert.deepStrictEqual(park2.dinosaurs, [dinosaur2]);
  });
  it("should return an object with each of every diet type", () => {
    park2.addDinosaur(new Dinosaur("diplodocus", 'herbivore', 40 ));
    assert.deepStrictEqual(park2.getDietTypes(), {carnivore:2, herbivore:1, omnivore:0});

  }) 
});
