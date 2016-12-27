$("div").css("background", "purple");

$("div.highlight").css("width", "200px");

$("#third").css({
  "border": "2px solid orange"
});

$("div:first-of-type").css("color", "pink");

// div:first is build-in jQuery method but is slower than
// the build-in css first-of-type method
// $("div:first").css("color", "pink");
