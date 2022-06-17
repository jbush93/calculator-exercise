
it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: 1000000,
    years: 30,
    rate: 2
  };
  expect(calcMonthlyPayment(values)).toEqual('3696.19');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 100000,
    years: 10,
    rate: 2
  };
  expect(calcMonthlyPayment(values)).toEqual('920.13');
});

