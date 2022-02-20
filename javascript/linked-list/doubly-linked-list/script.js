// Initialize Linked list
let ll = new LinkedList();
// Add elements to list
ll.addToHead(new Node(10));
ll.addToHead(new Node(20));
ll.addToHead(new Node(30));
ll.addToHead(new Node(40));
ll.addToTail(new Node(10));
ll.addToTail(new Node(20));
console.log("Print all nodes");
console.log(...ll.printNodeValue());

console.log("Searching for 10");
console.log(ll.search(10));

console.log("List after deleting head node");
ll.removeFromHead();
console.log(...ll.printNodeValue());

console.log("List after deleting tail node");
ll.removeFromTail();
console.log(...ll.printNodeValue());
console.log("Get value at position: 1");
console.log(ll.getNode(1));

console.log("Add node at position: 1");
console.log(ll.addNode(1, new Node(1)));
console.log("Add node at position: 4");
console.log(ll.addNode(4, new Node(4)));
console.log("Print all nodes");
console.log(...ll.printNodeValue());
console.log("Get all nodes with value 20");
console.log(ll.indexOf(20));
