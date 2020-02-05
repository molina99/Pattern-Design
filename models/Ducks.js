const duck = require("../duck");

class Ducks {
  mallarDuck() {
    const mallar = new duck.Duck();
    mallar.performFly().fly();
    mallar.performFly().FlyWithWings();
    mallar.performQuack().quack();
    mallar.swim();
  }
  paperDuck() {
    const paper = new duck.Duck();
    paper.swim();
    paper.performFly().FlyNoWay();
    paper.performQuack().Mutequack();
  }
  woodDuck() {
    const wood = new duck.Duck();
    wood.swim();
    wood.performFly().FlyNoWay();
    wood.performQuack().Mutequack();
  }
}

module.exports = {
  Ducks
};
