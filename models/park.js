const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
  this.addDinosaur = (newDinosaur) => {
    this.dinosaurs.push(newDinosaur);
  };
  this.removeDinosaur = (dinosaur) => {
    index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
  };

  this.findDinosaursBySpecies = (species) => {
    return this.dinosaurs.filter((dinosaur) => dinosaur.species === species);
  };
  this.totalVisitorsPerDay = () => {
    return dinosaurs.reduce(
      (acc, dinosaur) => acc + dinosaur.guestsAttractedPerDay,
      0
    );
  };
  this.totalVisitorsPerYear = () => {
    return this.totalVisitorsPerDay() * 365;
  };
  this.totalRevenuePerYear = () => {
    return this.totalVisitorsPerYear() * this.ticketPrice;
  };
};

Park.prototype.mostPopularDinosaur = function () {
  return this.dinosaurs.reduce((accumulator, dinosaur) => {
    if (dinosaur.guestsAttractedPerDay > accumulator.guestsAttractedPerDay)
      return dinosaur;
    return accumulator;
  });
};

Park.prototype.removeBySpecies = function (species) {
  this.dinosaurs = this.dinosaurs.filter(
    (dinosaur) => dinosaur.species !== species
  );
};

Park.prototype.getDietTypes = function () {
  return this.dinosaurs.reduce(
    (diets, dinosaur) => {
      if (dinosaur.diet === "carnivore") diets.carnivore++;
      else if (dinosaur.diet === "herbivore") diets.herbivore++;
      else diets.omnivore++;
      return diets;
    },
    { carnivore: 0, herbivore: 0, omnivore: 0 }
  );
};

module.exports = Park;
