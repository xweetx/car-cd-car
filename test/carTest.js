const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3

  it("should return false if it's a hatchback", function() { // 4

  });

});


describe("#shouldBuyCar()", function() {

  it("should return false if it's a hatchback", function() {
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

});




// describe("#shouldBuyCar()", function() {

//   it("should return false when there are no details about the car", function() {
//     const car = {
//       details: ""
//     };
//     const shouldBuy = shouldBuyCar(car);
//     assert.isFalse(shouldBuy);
//   });

// });

// describe("#shouldBuyCar()", function() {

//   it("should return false when the car is a hatchback and pink", function() {
//     const car = {
//       type: "hatchback", color: "pink"
//     };

//     const shouldBuy = shouldBuyCar(car);
//     assert.isFalse(shouldBuy);
//   });

// });

describe("#shouldBuyCar()", function() {

  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", function() {
    const car = {
      litresPer100km: 6, price: 5000
    };

    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

});



it("should return true if it's 11 litres/100km  and under or equal to $5,000", function() {
  const car = {
    litresPer100km: 11,
    price: 5000
  };
  const shouldBuy = shouldBuyCar(car);
  assert.isTrue(shouldBuy);
});

it("should return true if it's 6 litres/100km and over $5,000", function() {
  const car = {
    litresPer100km: 6,
    price: 5001
  };
  const shouldBuy = shouldBuyCar(car);
  assert.isFalse(shouldBuy);
});

it("should return true if it's 11 litres/100km and over $5,000", function() {
  const car = {
    litresPer100km: 11,
    price: 5001
  };
  const shouldBuy = shouldBuyCar(car);
  assert.isFalse(shouldBuy);
});


it("should return false if it's 5 litres/100km and under or equal to $5,000", function() {
  const car = {
    litresPer100km: 5,
    price: 5000
  };
  const shouldBuy = shouldBuyCar(car);
  assert.isFalse(shouldBuy);
});
  
it("should return true if it's 12 litres/100km and under or equal to $5,000", function() {
  const car = {
    litresPer100km: 12,
    price: 5000
  };
  const shouldBuy = shouldBuyCar(car);
  assert.isFalse(shouldBuy);
});
  


