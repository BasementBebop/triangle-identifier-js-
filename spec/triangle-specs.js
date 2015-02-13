describe("triangle", function() {

  it("recognizes an equilateral triangle when all sides of a triangle are equal", function() {
    expect(triangle([3, 3, 3])).to.equal("an equilateral")
  });

  it("recognizes an isosceles triangle when exactly 2 sides are equal", function() {
    expect(triangle([3, 2, 2])).to.equal("an isosceles")
  });

  it("recognizes when 3 sides do not create a triangle", function() {
    expect(triangle([2, 2, 7])).to.equal("not a")
  });

  it("recognizes a scalene triangle when no sides are equal", function() {
    expect(triangle([2, 4, 5])).to.equal("a scalene")
  });
});
