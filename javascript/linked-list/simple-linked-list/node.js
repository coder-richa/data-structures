// Class representation of Linked List Node
class Node {
    // data argument represents node data/value
    // next represents the pointer to next node
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
    // Compares node data
    isEqual(data) {
        // returns true when both values and type are equal
        return data === this.data;
    }
}
