// Class representation of Linked List
class LinkedList {
    // head argument represents pointer to head node of the linked list
    // tail argument represents pointer to tail node of the linked list
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }
    // function to add node to the beginning of the linked list
    addToHead(node) {
        // Assign new nodes's next point to the current head node
        node.next = this.head;
        // check if the list is empty
        if (!this.head) {
            // List is empty so tail pointer should be set to the new node
            this.tail = node;
        } else {
            // List is non-empty so the previous pointer of the current head node should refer to new node
            this.head.prev = node;
        }
        // Shift the head pointer to the new node
        this.head = node;
    }
    // function to add node to the end of the linked list
    addToTail(node) {
        // Assign new nodes's previous point to the current tail node
        node.prev = this.tail;
        // check if the list is empty
        if (!this.head) {
            // List is empty so head pointer should be set to the new node
            this.head = node;
        } else {
            // List is non-empty so the next pointer of the current tail node should refer to new node
            this.tail.next = node;
        }
        // Shift the tail pointer to the new node
        this.tail = node;
    }
    // function to add node to the nth position of the linked list
    addNode(position, node) {
        // check if the list is empty
        if (position == 1) {
            // Add node to the head
            this.addToHead(node);
            return true;
        }
        // fetch node at given position
        let currentNode = this.getNode(position);
        // check if element exists at the given location
        if (currentNode == null) {
            // Position is out of range
            return false;
        }
        // Update node pointers
        currentNode.prev.next = node;
        node.prev = currentNode.prev;
        node.next = currentNode;
        currentNode.prev = node;
        return true;
    }
    // function to remove node from the beginning of the linked list
    removeFromHead() {
        this.head = this.head.next;
        // check if the list is empty
        if (!this.head) {
            // List is empty so tail pointer should be set to the head node
            this.tail = this.head;
        } else {
            // Set previous pointer of the list head to null
            this.head.prev = null;
        }
    }
    // function to remove node from the end of the linked list
    removeFromTail() {
        this.tail = this.tail.prev;
        // check if the list is empty
        if (!this.tail) {
            // List is empty so head pointer should be set to the tail node
            this.head = this.tail;
        } else {
            // Set next pointer of the list tail to null
            this.tail.next = null;
        }
    }
    // function to retrieve  first node with matching data in the linked list
    search(data) {
        // check if the list is empty
        if (!this.head) {
            // List is empty so return null
            return null;
        }
        // Using forward node transversal
        // Hold the reference to head node
        let currentNode = this.head;
        // Loop over the list while we reach the last node
        while (currentNode) {
            // Check if the node matches the search criteria
            if (currentNode.isEqual(data))
                // The current node matches the search critera so return it
                return currentNode;
            // Move to next node
            currentNode = currentNode.next;
        }
        // No node matches the search criteria so return null
        return null;
    }

    // function to retrieve  nth node from the linked list
    getNode(position) {
        // check if the list is empty
        if (!this.head) {
            // List is empty so return null
            return null;
        }
        // Using forward node transversal
        // Hold the reference to head node
        let currentNode = this.head;
        // initialize current index to -1
        let currentIndex = -1;
        // Loop over the list while we reach the last node/ specified node position
        while (currentNode) {
            // Increment current index
            currentIndex++;
            // Check if the node position is equal to seached position
            if (currentIndex + 1 == position)
                // The current node matches the search critera so return it
                return currentNode;
            // Move to next node
            currentNode = currentNode.next;
        }
        // No node matches the search criteria so return null
        return null;
    }

    // function to retrieve all indexes with matching data in the linked list
    indexOf(data) {
        // check if the list is empty
        if (!this.head) {
            // List is empty so return null
            return null;
        }
        // Array to hold indexes of matching node
        let indexes = [];
        // Using forward node transversal
        // Hold the reference to head node
        let currentNode = this.head;
        // initialize current index to -1
        let currentIndex = -1;
        // Loop over the list while we reach the last node
        while (currentNode) {
            // Increment current index
            currentIndex++;
            // Check if the node matches the search criteria
            if (currentNode.isEqual(data))
                // The current node matches the search critera so add it to the array
                indexes.push(currentIndex);
            // Move to next node
            currentNode = currentNode.next;
        }
        // Return array of indexes
        return indexes;
    }
    // function to retrieve all values of linked list
    printNodeValue() {
        // Array to hold values of matching node
        let values = [];
        // check if the list is empty
        if (!this.head) {
            // List is empty so return null
            return values;
        }

        // Using forward node transversal
        // Hold the reference to head node
        let currentNode = this.head;
        // Loop over the list while we reach the last node
        while (currentNode) {
            // Get current node data add it to the array
            values.push(currentNode.data);
            // Move to next node
            currentNode = currentNode.next;
        }
        // Return array of values
        return values;
    }
}
