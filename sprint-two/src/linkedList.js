var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

  //for in loop:
  //look in list for node that has node.next === null
  //set that node.next === our new node
    var node = new Node(value);
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    }
    else {
      list.tail.next = node;
      list.tail = node;
    }

  };

  list.removeHead = function() {
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target) {
    var currentHead = this.head;
    while(currentHead) {
      if(target === currentHead.value) {
        return true;
      } else {
        currentHead = currentHead.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
