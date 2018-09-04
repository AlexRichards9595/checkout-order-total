var checked = new Array;

var scan = function(itemName) {
  var price = getPrice(itemName);
  checked.push({
    name : itemName
  });
}
