var Queue = function() {
  var count = 0;

  // Use an object with numeric keys to store values
  //var storage = {name:"Jason"};
  var storage = {};
  // Implement the methods below
  someInstance.enqueue = function(value) {

    //var len = Object.keys(storage).length;
    //console.log(len);
    //console.log(typeof len);


    storage[count] = value;
    count++;

    //var indexer =
    //var len = storage[Object.keys(storage)[Object.keys(storage).length-1]];
  };



  someInstance.dequeue = function() {

    var len = Object.keys(storage).length;
    //console.log(len);console.log("Printing it out: ");
    //console.log(typeof len);
    var value = storage[Object.keys(storage)[0]];
    delete storage[Object.keys(storage)[0]];
    //console.log("dequeue value: " + value);
    //return console.log("dequeue value: " + value);


    return value;
    };

  someInstance.size = function() {

    return Object.keys(storage).length;
  };
};
