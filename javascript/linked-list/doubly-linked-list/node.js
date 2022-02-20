// Class representation of Linked List Node
class Node {
    // data argument represents node data/value
    // prev represents the pointer to previous node
    // next represents the pointer to next node
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
    // Compares node data
    isEqual(data) {
        // returns true when both values and type are equal
        return data === this.data;
    }
}
