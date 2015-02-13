var triangle = function(sides) {
  sides.sort();
  if(sides[2] > sides[0] + sides[1]) {
    return "not a";
  } else if(sides[0] === sides[1] && sides[1] === sides[2]) {
    return "an equilateral";
  } else if(sides[0] === sides[1] || sides[1] === sides[2]) {
    return "an isosceles";
  } else {
    return "a scalene";
  }
}

$(document).ready(function() {
  $("form#sides").submit(function(event){
    var side1 = $("sides#side1").val();
    var side2 = $("sides#side2").val();
    var side3 = $("sides#side3").val();
    var sides = [side1, side2, side3];
    var output = triangle(sides);
    $("#output").text(output);

    $(".result").show();

    event.preventDefault();
  });
});
