var triangle = function(angles) {
  angles.sort();

  if(angles[2] > angles[0] + angles[1]) {
    return "not a";
  } else if(angles[0] === angles[1] && angles[1] === angles[2]) {
    return "an equilateral";
  } else if(angles[0] === angles[1] || angles[1] === angles[2]) {
    return "an isosceles";
  } else {
    return "a scalene";
  }

}
