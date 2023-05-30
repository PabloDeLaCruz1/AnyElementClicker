javascript:(function() {
  var targetString = "YOUR_TARGET_STRING";
  var elements = Array.from(document.querySelectorAll("*")).filter(function(element) {
    var attributes = element.attributes;
    for (var i = 0; i < attributes.length; i++) {
      if (attributes[i].value.includes(targetString)) {
        return true;
      }
    }
    return false;
  });

  function simulateClick(element) {
    var event = document.createEvent("MouseEvents");
    event.initMouseEvent(
      "click",
      true, // bubbles
      true, // cancelable
      window, // view
      0, // detail
      0, // screenX
      0, // screenY
      0, // clientX
      0, // clientY
      false, // ctrlKey
      false, // altKey
      false, // shiftKey
      false, // metaKey
      0, // button
      null // relatedTarget
    );
    element.dispatchEvent(event);
  }

  if (elements.length > 0) {
    elements.forEach(function(element) {
      simulateClick(element);
    });
  } else {
    console.log("No elements found with the specified string in any attribute.");
  }
})();
