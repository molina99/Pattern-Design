const FlyBehavior = require("./interfaces/flyBehavior");
const QuackBehavior = require("./interfaces/quackBehavior");
const quackBehavior = new QuackBehavior.QuackBehavior();
const flyBehavior = new FlyBehavior.FlyBehavior();

class Duck {
  swim() {
    console.log("Estoy nadando");
  }

  performQuack() {
    return quackBehavior;
  }

  performFly() {
    return flyBehavior;
  }
}

module.exports = {
  Duck
};
