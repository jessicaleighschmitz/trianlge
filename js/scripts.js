$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var side1 = parseInt($('input#side1').val());
    var side2 = parseInt($('input#side2').val());
    var side3 = parseInt($('input#side3').val());
    var result;

    if (side1 === side2 && side1 === side3) {
      $("#isosceles").hide();
      $("#scalene").hide();
      $("#equilateral").show();
    } else if (side1 === side2 && side1 !==side3 || side2 === side3 && side2 !==side1 || side1 === side3 && side1 !== side2) {
      $("#equilateral").hide();
      $("#scalene").hide();
      $("#isosceles").show();
    } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
      $("#equilateral").hide();
      $("#not-triangle").hide();
      $("#isosceles").hide();
      $("#scalene").show();
    } else if (side1 + side2 > side3 || side1 + side3 > side2 || side2 + side3 > side1) {
      $("#equilateral").hide();
      $("#isosceles").hide();
      $("#scalene").hide();
      $("#not-triangle").show();

    }
  });


});
