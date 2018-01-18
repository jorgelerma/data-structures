var Stack = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {

  storage[count] = value;
    //increment by 1 ticket
    count++;
  };

  someInstance.pop = function() {
   //var value = storage[Object.keys(storage)[0]]
    var value = storage[Object.keys(storage)[Object.keys(storage).length -1]]
    //pop first element
    delete storage[Object.keys(storage).length -1]
    //return value
    return value;

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};