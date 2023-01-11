
// challenge 1:

function canDrive(age, fuel) {
  const legalDrivingAge = 18;
  const amountOfFuelLeft = 0;
  if (age > legalDrivingAge && fuel > amountOfFuelLeft) {
    return "The person can drive the car!";
  }
  return "Cannot Drive !";
}


// challenge 2:

const circleStrategy = (shape) => Math.PI * shape.radius * shape.radius;

const squareStrategy = (shape) => shape.width * shape.width;

const rectangleStrategy = (shape) => shape.width * shape.height;

const areaStrategies = {
  circle: circleStrategy,
  square: squareStrategy,
  rectangle: rectangleStrategy,
};

function getArea(shapeName, width, height, radius) {
  const shapeObject = { width, height, radius };
  const strategy = areaStrategies[shapeName];
  return strategy(shapeObject);
}